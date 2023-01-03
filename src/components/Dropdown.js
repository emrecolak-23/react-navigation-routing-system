import { useState, useEffect, useRef } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleClick = (option) => {
    // Close Toggle
    setIsOpen(false);
    // Select Option
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value}>
        <div
          className="hover:bg-gray-100 cursor-pointer hover:border-b hover:border-black p-1"
          onClick={() => handleClick(option)}
        >
          {option.label}
        </div>
      </div>
    );
  });

  let icon = isOpen ? <GoChevronDown /> : <GoChevronLeft />;

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer border-b-black font-sans font-medium"
        onClick={handleToggle}
      >
        {value?.label || 'Select...'}
        <div className="text-xl">{icon}</div>
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
