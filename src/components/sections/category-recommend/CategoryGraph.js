"use client";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Chart.js 컴포넌트 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/**
 * 카테고리 데이터 시각화 그래프 컴포넌트
 * 카테고리별 검색량과 상품수를 막대 그래프로 표시
 * 
 * @param {Array} recommendedCategories - 추천된 카테고리 데이터 배열
 * @param {string} recommendedCategories[].category_name - 카테고리명
 * @param {number} recommendedCategories[].monthly_search_cnt - 월간 검색량
 * @param {number} recommendedCategories[].product_cnt - 상품수
 */
const CategoryGraph = ({ recommendedCategories }) => {
  /**
   * 차트 기본 설정
   * - 반응형 설정
   * - 축 설정
   * - 범례 및 타이틀 설정
   * - 툴팁 커스터마이징
   */
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '카테고리별 검색량 및 상품수',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toLocaleString();
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          minRotation: 45
        }
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: '검색량',
        },
        ticks: {
          callback: function(value) {
            return value.toLocaleString();
          }
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: '상품수',
        },
        ticks: {
          callback: function(value) {
            return value.toLocaleString();
          }
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  /**
   * 차트 데이터 생성 함수
   * 검색량과 상품수를 각각 다른 색상의 막대로 표시
   */
  const getChartData = () => {
    return {
      labels: recommendedCategories.map(cat => cat.category_name),
      datasets: [
        {
          label: '월간 검색량',
          data: recommendedCategories.map(cat => cat.monthly_search_cnt),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          yAxisID: 'y',
          datalabels: {
            align: 'end',
            anchor: 'end',
            formatter: (value) => value.toLocaleString()
          }
        },
        {
          label: '상품수',
          data: recommendedCategories.map(cat => cat.product_cnt),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          yAxisID: 'y1',
          datalabels: {
            align: 'end',
            anchor: 'end',
            formatter: (value) => value.toLocaleString()
          }
        },
      ],
    };
  };

  /**
   * 차트 플러그인 설정
   * 막대 위에 데이터 값을 표시하는 커스텀 플러그인
   */
  const plugins = [{
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      ctx.save();
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      
      chart.data.datasets.forEach((dataset, i) => {
        const meta = chart.getDatasetMeta(i);
        meta.data.forEach((bar, index) => {
          const data = dataset.data[index].toLocaleString();
          const position = bar.getCenterPoint();
          const barHeight = bar.height;
          const yPos = position.y - barHeight / 2;
          
          ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
          ctx.fillText(data, position.x, yPos);
        });
      });
      ctx.restore();
    }
  }];

  return (
    <div className="chart-scroll-container" style={{ 
      width: '100%',
      overflowX: 'auto',
      overflowY: 'hidden',
      marginBottom: '30px'
    }}>
      <div style={{ 
        height: '400px',
        minWidth: `${Math.max(800, recommendedCategories.length * 100)}px`
      }}>
        <Bar options={options} data={getChartData()} plugins={plugins} />
      </div>
    </div>
  );
};

export default CategoryGraph; 