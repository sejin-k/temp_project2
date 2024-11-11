'use client'
import React, { useState } from 'react'

function RecommendCntRadio({onDataChange}) {
    const [inputStatus, setInputStatus] = useState('recommend30');

    const handleRadioStatus = (radioId) => {
        setInputStatus(radioId);
        // 숫자만 추출하여 전달
        const count = parseInt(radioId.replace('recommend', ''));
        onDataChange(count);
    }

    return (
        <fieldset>
            <label>
                <input 
                    type='radio' 
                    className='recommend_radio' 
                    id='recommend30' 
                    value={30} 
                    onChange={() => handleRadioStatus('recommend30')}
                    checked={inputStatus === 'recommend30'}
                />
                <span className='radio_value'>30 건</span>
            </label>
            
            <label>
                <input 
                    type='radio' 
                    className='recommend_radio' 
                    id='recommend50' 
                    value={50} 
                    onChange={() => handleRadioStatus('recommend50')} 
                    checked={inputStatus === 'recommend50'}
                />
                <span className='radio_value'>50 건</span>
            </label>

            <label>
                <input 
                    type='radio' 
                    className='recommend_radio' 
                    id='recommend100' 
                    value={100} 
                    onChange={() => handleRadioStatus('recommend100')} 
                    checked={inputStatus === 'recommend100'}
                />
                <span className='radio_value'>100 건</span>
            </label>
        </fieldset>
    );
}

export default RecommendCntRadio;
