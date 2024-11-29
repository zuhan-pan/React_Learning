import { formatter, calculateInvestmentResults } from '../util/investment';

export default function Result({ updatedData }) {
  let totalInterests = 0;

  const displayData = calculateInvestmentResults(updatedData);

  const display = displayData.map(yearData => {
    totalInterests += yearData.interest;
    let inverstedCaptial = yearData.valueEndOfYear - totalInterests;
    return (
      <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.valueEndOfYear)}</td>
        <td>{formatter.format(yearData.interest)}</td>
        <td>{formatter.format(totalInterests)}</td>
        <td>{formatter.format(inverstedCaptial)}</td>
      </tr>
    );
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{display}</tbody>
    </table>
  );
}
