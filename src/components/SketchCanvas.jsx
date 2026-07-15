import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEdit2, FiTrash2, FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import { FaEraser } from 'react-icons/fa';

export default function SketchCanvas() {
  const [isSketchMode, setIsSketchMode] = useState(false);
  const [tool, setTool] = useState('pencil'); // 'pencil' | 'red-pen' | 'highlighter' | 'eraser'
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);

  // Resize canvas to match the entire scrollable height of the page
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Save current drawings before resize to prevent losing them
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(canvas, 0, 0);

    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    canvas.width = window.innerWidth;
    canvas.height = docHeight;

    // Restore drawing
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.drawImage(tempCanvas, 0, 0);
  };

  useEffect(() => {
    if (isSketchMode) {
      // Small timeout to let DOM render
      setTimeout(() => {
        resizeCanvas();
      }, 50);
      window.addEventListener('resize', resizeCanvas);
      // Periodic check in case sections load asynchronously
      const interval = setInterval(resizeCanvas, 2000);
      
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        clearInterval(interval);
      };
    }
  }, [isSketchMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleTouchStart = (e) => {
      if (!isSketchMode) return;
      isDrawing.current = true;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left + window.scrollX;
      const y = touch.clientY - rect.top + window.scrollY;
      lastX.current = x;
      lastY.current = y;
    };

    const handleTouchMove = (e) => {
      if (!isDrawing.current || !isSketchMode) return;
      // Prevent default scrolling gesture on touch screens while drawing
      if (e.cancelable) {
        e.preventDefault();
      }

      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left + window.scrollX;
      const y = touch.clientY - rect.top + window.scrollY;

      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(lastX.current, lastY.current);
      ctx.lineTo(x, y);

      // Apply tools styles
      if (tool === 'pencil') {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = '#27272a';
        ctx.lineWidth = 2.5;
      } else if (tool === 'red-pen') {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2.2;
      } else if (tool === 'highlighter') {
        ctx.globalCompositeOperation = 'multiply';
        ctx.strokeStyle = 'rgba(254, 240, 138, 0.45)';
        ctx.lineWidth = 22;
      } else if (tool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = 32;
      }

      ctx.stroke();
      
      lastX.current = x;
      lastY.current = y;
    };

    const handleTouchEnd = () => {
      isDrawing.current = false;
    };

    // Attach listeners with passive: false to allow blocking standard browser touch scroll
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isSketchMode, tool]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    isDrawing.current = true;
    
    // Get mouse coordinates relative to the absolute page layout
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left + window.scrollX;
    const y = e.clientY - rect.top + window.scrollY;
    
    lastX.current = x;
    lastY.current = y;
  };

  const draw = (e) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left + window.scrollX;
    const y = e.clientY - rect.top + window.scrollY;

    ctx.beginPath();
    ctx.moveTo(lastX.current, lastY.current);
    ctx.lineTo(x, y);

    // Apply tools styles
    if (tool === 'pencil') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = '#27272a'; // graphite dark
      ctx.lineWidth = 2.5;
    } else if (tool === 'red-pen') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = '#ef4444'; // red ink
      ctx.lineWidth = 2.2;
    } else if (tool === 'highlighter') {
      ctx.globalCompositeOperation = 'multiply';
      ctx.strokeStyle = 'rgba(254, 240, 138, 0.45)'; // translucent yellow
      ctx.lineWidth = 22;
    } else if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = 32;
    }

    ctx.stroke();
    
    lastX.current = x;
    lastY.current = y;
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      {/* Floating Canvas Overlay - active only when sketch mode is on */}
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className={`absolute top-0 left-0 w-full h-full ${
          isSketchMode ? 'pointer-events-auto z-40 cursor-crosshair' : 'pointer-events-none z-10'
        }`}
      />

      {/* Floating Pencil Button / Drawing controls */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-mono">
        
        {/* Sketch Control Panel */}
        <AnimatePresence>
          {isSketchMode && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.9 }}
              className="flex items-center gap-2 p-2 bg-white border-2 border-[#1A1A1A] rounded-xl shadow-[4px_4px_0_0_#1A1A1A]"
            >
              {/* Graphite Pencil */}
              <button
                onClick={() => setTool('pencil')}
                className={`p-2 rounded-lg border border-transparent font-bold text-xs uppercase transition-all ${
                  tool === 'pencil' ? 'bg-[#27272a] text-white border-[#1A1A1A]' : 'text-zinc-700 hover:bg-stone-100'
                }`}
                title="Graphite Pencil"
              >
                ✎ Pencil
              </button>

              {/* Red Pen */}
              <button
                onClick={() => setTool('red-pen')}
                className={`p-2 rounded-lg border border-transparent font-bold text-xs uppercase transition-all ${
                  tool === 'red-pen' ? 'bg-red-500 text-white border-[#1A1A1A]' : 'text-red-500 hover:bg-red-50'
                }`}
                title="Red Ink Pen"
              >
                🖊 Red
              </button>

              {/* Highlighter */}
              <button
                onClick={() => setTool('highlighter')}
                className={`p-2 rounded-lg border border-transparent font-bold text-xs uppercase transition-all ${
                  tool === 'highlighter' ? 'bg-yellow-200 text-[#1A1A1A] border-[#1A1A1A]' : 'text-yellow-600 hover:bg-yellow-50'
                }`}
                title="Yellow Highlighter"
              >
                🖍 Highlight
              </button>

              {/* Eraser */}
              <button
                onClick={() => setTool('eraser')}
                className={`p-2.5 rounded-lg border border-transparent transition-all ${
                  tool === 'eraser' ? 'bg-stone-800 text-white border-[#1A1A1A]' : 'text-zinc-600 hover:bg-stone-100'
                }`}
                title="Eraser"
              >
                <FaEraser className="h-3.5 w-3.5" />
              </button>

              {/* Clear board */}
              <button
                onClick={clearCanvas}
                className="p-2.5 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                title="Clear Sketchpad"
              >
                <FiTrash2 className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Mode Button */}
        <button
          onClick={() => setIsSketchMode(!isSketchMode)}
          className={`btn-sketch px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 hover-target shrink-0 ${
            isSketchMode ? 'bg-yellow-100' : 'bg-white'
          }`}
        >
          <FiEdit2 className="h-4 w-4" />
          <span>{isSketchMode ? 'DISABLE SKETCHPAD' : 'ENABLE SKETCHPAD'}</span>
          {isSketchMode ? <FiToggleRight className="h-5 w-5 text-red-500" /> : <FiToggleLeft className="h-5 w-5 text-zinc-400" />}
        </button>

      </div>
    </>
  );
}
