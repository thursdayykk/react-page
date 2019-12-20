import {useEffect,useState} from "react"
import {getStudents} from "../../services/student"
/**
 * 当组件首次加载完成后后，获取所有学生数据
 */
export default function usePageStudents(page = 1,limit = 10){
    const [resp, setResp] = useState()
    useEffect(() => {
        (async ()=>{
            const resp = await getStudents(page,limit)
            console.log("....")
            console.log(resp)
            setResp(resp)

        })()
    }, [page,limit])
    return resp
}