
const ToolBar = ({openSidebar}) => {
    return (
        <div className='toolbar'>
            <div className='icon' onClick={openSidebar}>
                <i className="ri-menu-line"></i>
            </div>
            <div className='title'>
                Bar
            </div>
        </div>
    )
}

export default ToolBar