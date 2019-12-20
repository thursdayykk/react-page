/* eslint "react-hooks/exhaustive-deps": "off" */

import {useEffect} from 'react'

/**
 * 组件首次渲染后启动一个计时器
 * 组件卸载后，清除计时器
 */
export default (func,duration) => {
    useEffect(() => {
        const timer = setInterval(func,duration);
        return () => {
            clearInterval(timer)
        }
        // eslint-fix-able
    }, [])
}
