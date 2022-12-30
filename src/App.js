import Accordion from './components/Accordion';
function App() {
  const items = [
    {
      id: '1',
      label: 'Can I use React on a project?',
      content:
        'You can use React any project you want. You can use React any project you want.',
    },
    {
      id: '2',
      label: 'Can I use Javascript on a project?',
      content:
        'You can use javascript any project you want. You can use javascript any project you want.',
    },
    {
      id: '3',
      label: 'Can I use CSS on a project?',
      content:
        'You can use CSS any project you want. You can use CSS any project you want.',
    },
  ];

  return <Accordion items={items} />;
}

export default App;
