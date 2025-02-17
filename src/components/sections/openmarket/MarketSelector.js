import Image from "next/image";
import styles from './MarketSelector.module.css';

const MarketSelector = ({ marketInfo, selectedMarket, onMarketSelect }) => {
  return (
    <div className={styles.market_tabs}>
      <ul className="nav justify-content-center">
        {marketInfo.map((market) => (
          <li key={market.platformId} className="nav-item">
            <button
              className={`nav-link ${styles.market_button} ${
                selectedMarket === market.platformId ? styles.active : ""
              }`}
              onClick={() => onMarketSelect(market.platformId)}
            >
              <Image
                src={market.icon}
                alt="마켓 아이콘"
                width={100}
                height={100}
                style={{
                  display: "block",
                  margin: "0 auto 8px auto",
                  objectFit: "contain",
                }}
              />
              <span>{market.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketSelector; 