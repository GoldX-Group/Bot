'use client';

export default function ActivityChart({ data }) {
  // Datos de ejemplo para el gráfico
  const chartData = [
    { name: 'Lun', tickets: 4, messages: 24 },
    { name: 'Mar', tickets: 3, messages: 18 },
    { name: 'Mié', tickets: 7, messages: 32 },
    { name: 'Jue', tickets: 2, messages: 15 },
    { name: 'Vie', tickets: 9, messages: 41 },
    { name: 'Sáb', tickets: 5, messages: 28 },
    { name: 'Dom', tickets: 3, messages: 20 },
  ];

  const maxValue = Math.max(
    ...chartData.map(d => Math.max(d.tickets, d.messages))
  );

  return (
    <div className="h-64">
      <div className="flex h-full items-end space-x-2">
        {chartData.map((day, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full flex flex-col space-y-1">
              {/* Barra de mensajes */}
              <div 
                className="bg-purple-500 rounded-t"
                style={{ 
                  height: `${(day.messages / maxValue) * 120}px`,
                  minHeight: '4px'
                }}
                title={`${day.messages} mensajes`}
              />
              {/* Barra de tickets */}
              <div 
                className="bg-blue-500 rounded-t"
                style={{ 
                  height: `${(day.tickets / maxValue) * 120}px`,
                  minHeight: '4px'
                }}
                title={`${day.tickets} tickets`}
              />
            </div>
            <span className="text-xs text-gray-600 mt-2">{day.name}</span>
          </div>
        ))}
      </div>
      
      {/* Leyenda */}
      <div className="flex justify-center space-x-6 mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-500 rounded mr-2"></div>
          <span className="text-xs text-gray-600">Mensajes</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
          <span className="text-xs text-gray-600">Tickets</span>
        </div>
      </div>
    </div>
  );
}
