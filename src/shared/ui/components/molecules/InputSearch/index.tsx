import React, { FC, useState, ChangeEventHandler } from 'react'
import { SearchOutlined } from '@ant-design/icons'

import { ButtonSearch, Input, InputSearchWrapper } from './styles'
import { TInputSearchProps } from './types'

export const InputSearch: FC<TInputSearchProps> = ({ placeholder, onSearch }) => {
    // States
    const [value, setValue] = useState('')

    const handleSearch = () => {
        onSearch(value)
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
        setValue(e.target.value)
    }

    return (
        <InputSearchWrapper>
            <Input
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
            />
            <ButtonSearch onClick={handleSearch}>
                <SearchOutlined />
            </ButtonSearch>
        </InputSearchWrapper>
    )
}
