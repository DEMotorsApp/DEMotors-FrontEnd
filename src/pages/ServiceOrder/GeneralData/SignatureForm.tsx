import React, { useRef, useState, useEffect } from 'react';
import { faSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignatureForm = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
    const COLOR_PINCEL = 'gray';
    const GROSOR = 2;

    const obtenerXReal = (clientX: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return 0;
        const rect = canvas.getBoundingClientRect();
        return clientX - rect.left;
    };

    const obtenerYReal = (clientY: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return 0;
        const rect = canvas.getBoundingClientRect();
        return clientY - rect.top;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            setContext(ctx);
        }
    }, []);

    const handleMouseDown = (evento: React.MouseEvent<HTMLCanvasElement>) => {
        if (!context) return;

        const xActual = obtenerXReal(evento.clientX);
        const yActual = obtenerYReal(evento.clientY);
        context.beginPath();
        context.fillStyle = COLOR_PINCEL;
        context.fillRect(xActual, yActual, GROSOR, GROSOR);
        context.closePath();
        setLastPosition({ x: xActual, y: yActual });
        setIsDrawing(true);
    };

    const handleMouseMove = (evento: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing || !context) return;

        const xActual = obtenerXReal(evento.clientX);
        const yActual = obtenerYReal(evento.clientY);
        context.beginPath();
        context.moveTo(lastPosition.x, lastPosition.y);
        context.lineTo(xActual, yActual);
        context.strokeStyle = COLOR_PINCEL;
        context.lineWidth = GROSOR;
        context.stroke();
        context.closePath();
        setLastPosition({ x: xActual, y: yActual });
    };

    const handleMouseUpOrOut = () => {
        setIsDrawing(false);
    };


    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    <FontAwesomeIcon icon={faSignature} /> &nbsp; Firma Orden de Servicio
                </h3>
            </div>
            <form action="#">
                <div className="p-6.5">
                    <div className="mb-4.5">
                        <canvas
                            id='canvas'
                            ref={canvasRef}
                            width='auto' 
                            height='auto' 
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUpOrOut}
                            onMouseOut={handleMouseUpOrOut}
                        ></canvas>
                    </div>
                    <button type="button" className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                        Limpiar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignatureForm;
