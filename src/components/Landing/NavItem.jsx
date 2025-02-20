export default function NavItem ({ targetId, children }) {
    const handleClick = () => {
      const target = document.getElementById(targetId);
      target?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return <h2 onClick={handleClick}>{children}</h2>;
  };