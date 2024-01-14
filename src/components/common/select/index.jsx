import React from 'react'
import './style.css'
import { Select } from 'antd'

export default function SelectCommon({ onChange, options, placeholder, mode, rootClassName }) {
    return (
        <>
            <Select
                allowClear
                mode={mode}
                rootClassName={rootClassName}
                placeholder={placeholder}
                onChange={onChange}
                options={options}
            />
        </>
    )
}
