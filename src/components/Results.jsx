import { calculateInvestmentResults } from '../util/investment.js';

export default function Results({ userInput }) {
    const resultsData = calculateInvestmentResults(userInput)
   console.log('r', resultsData)
    return <p>Results</p>
}