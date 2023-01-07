function Table({ data, config, keyFn }) {
  const renderedRows = data.map((rowData) => {
    const renderedCell = config.map((column) => {
      return (
        <td className="p-3" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCell}
      </tr>
    );
  });

  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
}

export default Table;
