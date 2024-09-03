import '../styles.css'

export default function Tab({active, content, handleClick}) {
    return (
        <div 
            className={`flex-auto cursor-pointer text-xs lg:text-sm xl:text-base w-1/3 rounded-lg py-1.5 ${active===content ? 'active-tab' : 'tab'}`}
            onClick={()=> handleClick(content)}>
            {content}
        </div>
    );
}