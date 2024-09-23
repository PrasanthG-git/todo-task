
let incomeCount = 0;
let expenseCount = 0;

document.getElementById("add-income").addEventListener("click", function () {
  incomeCount++;
  const incomeList = document.getElementById("income-list");
  const incomeDiv = document.createElement("div");
  incomeDiv.classList.add("mb-4");
  incomeDiv.innerHTML = `
        <div class="flex gap-4 items-center">
            <div class="w-2/3">
                <label for="income-${incomeCount}-name" class="block text-md font-medium text-blue-700">Income Source</label>
                <input type="text" id="income-${incomeCount}-name" class="w-full p-2 border border-blue-300 rounded-lg" placeholder="Source name" />
            </div>
            <div class="w-1/3">
                <label for="income-${incomeCount}-amount" class="block text-md font-medium text-blue-700">Amount (Rs.)</label>
                <input type="number" id="income-${incomeCount}-amount" class="w-full p-2 border border-blue-300 rounded-lg" placeholder="Amount" />
            </div>
        </div>
    `;
  incomeList.appendChild(incomeDiv);
});

document.getElementById("add-expense").addEventListener("click", function () {
  expenseCount++;
  const expenseList = document.getElementById("expense-list");
  const expenseDiv = document.createElement("div");
  expenseDiv.classList.add("mb-4");
  expenseDiv.innerHTML = `
        <div class="flex gap-4 items-center">
            <div class="w-2/3">
                <label for="expense-${expenseCount}-name" class="block text-md font-medium text-red-700">Expense Name</label>
                <input type="text" id="expense-${expenseCount}-name" class="w-full p-2 border border-red-300 rounded-lg" placeholder="Expense name" />
            </div>
            <div class="w-1/3">
                <label for="expense-${expenseCount}-amount" class="block text-md font-medium text-red-700">Amount (Rs.)</label>
                <input type="number" id="expense-${expenseCount}-amount" class="w-full p-2 border border-red-300 rounded-lg" placeholder="Amount" />
            </div>
        </div>
    `;
  expenseList.appendChild(expenseDiv);
});

document.getElementById("calculate-btn").addEventListener("click", function () {
  let totalIncome = 0;
  let totalExpenses = 0;

  // Calculate total income
  for (let i = 1; i <= incomeCount; i++) {
    const incomeAmount = parseFloat(
      document.getElementById(`income-${i}-amount`).value
    );
    if (!isNaN(incomeAmount)) {
      totalIncome += incomeAmount;
    }
  }

  // Calculate total expenses
  for (let i = 1; i <= expenseCount; i++) {
    const expenseAmount = parseFloat(
      document.getElementById(`expense-${i}-amount`).value
    );
    if (!isNaN(expenseAmount)) {
      totalExpenses += expenseAmount;
    }
  }

  // Display result
  let resultMessage = "";
  const remainingBalance = totalIncome - totalExpenses;

  if (remainingBalance > 0) {
    resultMessage = `You have Savings of Rs.${remainingBalance.toFixed(2)}.`;
  } else if (remainingBalance < 0) {
    resultMessage = `You have a Loan Amount of Rs.${Math.abs(
      remainingBalance
    ).toFixed(2)}.`;
  } else {
    resultMessage = `You have no balance left`;
  }

  document.getElementById("result").innerHTML = `<p>${resultMessage}</p>`;
});
