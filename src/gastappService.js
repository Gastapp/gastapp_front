const server = 'http://192.168.0.236:5000';

const get = (path, body={}) => {
  var url = new URL(`${server}${path}`);
  Object.keys(body).forEach(key => url.searchParams.append(key, body[key]));

  return fetch(url.toString()).then(res => { return res.json() })
}

const post = (path, body) => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  
  const url = new URL(`${server}${path}`);
  
  return fetch(url, requestOptions).then(res => res.json().then(data => { return {data: data, status: res.status } }))
  
}

export const getAllExpenses = user_email => { return get('/expense/get_all', {"user_email": user_email}) };
export const getExpensesByCategory = (user_email, category) => { return get('/expense/get_by/category', {"user_email": user_email, "category": category}) };
export const getExpenseCategories = body => { return get('/category/expense/get_all') };
export const getTotalExpensesAmount = user_email => { return get('/expense/get_total_by/user', {"user_email": user_email}) };
export const getTotalCategoryAmount = (user_email, category) => { return get('/expense/get_total_by/category', {"user_email": user_email, "category": category}) };
export const getLastestExpenses = user_email => { return get('/expense/get_latest', {"user_email": user_email}) };
export const addExpense = body => { return post('/expense/add', {"body": body}) }

export const getAllIncomes = user_email => { return get('/income/get_all', {"user_email": user_email}) };
export const getIncomeCategories = body => { return get('/category/income/get_all') };
export const getLastestIncomes = user_email => { return get('/income/get_latest', {"user_email": user_email}) };
export const getTotalIncomesAmount = user_email => { return get('/income/get_total_by/user', {"user_email": user_email}) };
export const addIncome = body => { return post('/income/add', {"body": body}) };

export const loginUser = (email, password) => { return post('/login', {"email": email, "password": password}) };
export const registerUser = (username, email, password) => { return post('/register', {"name": username, "email": email, "password": password}) };