// This is a mock auth service that simulates API calls.
// In a real application, this would be replaced with actual API calls to a backend.

const mockLogin = async (email, password) => {
  console.log(`Attempting to log in with email: ${email}`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (email === 'test@digentra.com' && password === 'password123') {
    const user = { name: 'Test User', email: 'test@digentra.com' };
    const token = 'fake-jwt-token';
    console.log('Login successful');
    return { success: true, user, token };
  } else {
    console.log('Login failed: Invalid credentials');
    return { success: false, message: 'Invalid credentials' };
  }
};

const mockRegister = async (name, email, password) => {
    console.log(`Attempting to register with name: ${name}, email: ${email}`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Simulate a successful registration
    const user = { name, email };
    const token = 'new-fake-jwt-token';
    console.log('Registration successful');
    return { success: true, user, token };
};


const authService = {
  login: mockLogin,
  register: mockRegister,
};

export default authService;
