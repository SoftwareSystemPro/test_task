import React from 'react'
import '../../App.css'
import './style.css'
import { Button, DatePicker } from 'antd'
import dayjs from 'dayjs';
import SelectCommon from '../common/select';

export default function Hero() {
    const dateFormat = 'YYYY/MM/DD';

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    const handleChangeCategory = (value) => {
        console.log(`selected ${value}`);
    };
    const handleChangeOnline = (value) => {
        console.log(`selected ${value}`);
    };
    const handleChangeName = (value) => {
        console.log(`selected ${value}`);
    };

    const optionsName = [
        {
            label: 'Sunnatov Komronbek',
            value: 'Sunnatov Komronbek',
        },
        {
            label: 'Islom Tagayev',
            value: 'Islom Tagayev',
        },
    ];

    const optionsCategory = [
        {
            label: 'IT',
            options: [
                {
                    label: 'Web dasturlash',
                    value: 'Web dasturlash',
                },
                {
                    label: 'Mobile dasturlash',
                    value: 'Mobile dasturlash',
                },
            ],
        },
        {
            label: 'Dizayn',
            options: [
                {
                    label: 'UI/UX dizayn',
                    value: 'UI/UX dizayn',
                },
                {
                    label: 'Grafik dizayn',
                    value: 'Grafik dizayn',
                },
            ],
        },
        {
            label: 'Biznes',
            options: [
                {
                    label: 'Menejment',
                    value: 'Menejment',
                },
                {
                    label: 'Kredit va audit',
                    value: 'Kredit va audit',
                },
            ],
        },
        {
            label: 'Ta’lim',
            options: [
                {
                    label: 'Matematika',
                    value: 'Matematika',
                },
                {
                    label: 'Matematika',
                    value: 'Matematika',
                },
            ],
        },
    ];
    const optionsOnline = [
        {
            label: 'Online',
            value: 'Online',
        },
        {
            label: 'Offline',
            value: 'Offline',
        },
    ];

    return (
        <div className='hero_section'>
            <div className='container'>
                <div className='hero_wrapper'>
                    <h2 className='hero_title'>Eng so’ngi master klasslar va tadbirlar bizning saytda</h2>
                    <div className='hero_filter_wrapper'>
                        <div className='hero_filter_item'>
                            <DatePicker placeholder="2024-01-01" defaultValue={dayjs('2024/01/01', dateFormat)} format={dateFormat} onChange={onChange} />
                        </div>
                        <div className='hero_filter_item'>
                            <div className='drop_box'>
                                <i class='bx bxs-category-alt' ></i>
                                <SelectCommon
                                    rootClassName='selectOne'
                                    placeholder="Bo'limni tanlang"
                                    onChange={handleChangeCategory}
                                    options={optionsCategory}
                                />
                                <i class='bx bx-chevron-down' ></i>
                            </div>
                        </div>
                        <div className='hero_filter_item'>
                            <div className='drop_box'>
                                <i class='bx bx-rss' ></i>
                                <SelectCommon
                                    rootClassName='selectTwo'
                                    placeholder="Online / Offline"
                                    onChange={handleChangeOnline}
                                    options={optionsOnline}
                                />
                                <i class='bx bx-chevron-down' ></i>
                            </div>
                        </div>
                        <div className='hero_filter_item'>
                            <div className='drop_box'>
                                <i class='bx bx-user-circle' ></i>
                                <SelectCommon
                                    rootClassName='selectThree'
                                    placeholder="Ism familya"
                                    onChange={handleChangeName}
                                    options={optionsName}
                                />
                                <i class='bx bx-chevron-down' ></i>
                            </div>
                        </div>
                        <div className='hero_filter_item hero_no_padding_item'>
                            <button className='search_btn'>Izlash</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
