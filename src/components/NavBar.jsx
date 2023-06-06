import React from 'react'
export default function NavBar({navItems,getNavItem})
{
   
    return (
        <div>
            {
                navItems.map((item)=>{      
return <span onClick={()=>{getNavItem(item)}} 
style ={{ marginRight: "10px",cursor:"pointer"}}>{item}</span>
                })
            }
</div>    
)
}