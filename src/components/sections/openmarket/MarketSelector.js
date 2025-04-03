import Image from "next/image";
import styles from './MarketSelector.module.css';

const MarketSelector = ({ openMarketInfo, onChangeMarket }) => {
  const handleMarketChange = (platformId) => {
    const updatedMarketInfo = openMarketInfo.map(openMarket => ({
      ...openMarket,
      selected: openMarket.platformId === platformId
    }));
    onChangeMarket(updatedMarketInfo);
  };

  return (
    <div className={styles.market_tabs}>
      <ul className="nav justify-content-center">
        {openMarketInfo.map((openMarket) => (
          <li key={openMarket.platformId} className="nav-item">
            <button
              className={`nav-link ${styles.market_button} ${
                openMarket.selected ? styles.active : ""
              }`}
              onClick={() => handleMarketChange(openMarket.platformId)}
            >
              <Image
                src={openMarket.icon}
                alt={openMarket.platformName}
                width={100}
                height={100}
                style={{
                  display: "block",
                  margin: "0 auto 8px auto",
                  objectFit: "contain",
                }}
              />
              <span>{openMarket.platformName}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketSelector; 