import React from 'react'



const SubMenuItems = [
    {
        first: "Learn",
        second: "Teach",
        third: "Get Certified"
    },
    {
        first: "Hire",
        second: "Vacancy",
        third: "Get Hired"
    },
    {
        first: "Learn",
        second: "Teach",
        third: "Get Certified"
    }
]

function Dropdown({ items }) {
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownActive(true);
    }
    const handleMouseLeave = () => {
        setIsDropdownActive(false);
    }
    /*
    return(
        <div className="mainItem">
            {SubMenuItems[item].map(item)=>{
                <ul>
                    <li>{item.first}</li>
                    <li>{item.second}</li>
                    <li>{item.third}</li>
                </ul>
            }}
        </div>
    );
*/
}
function Dropdown() {
  return (
    <div>Dropdown</div>
  )
}

export default Dropdown;