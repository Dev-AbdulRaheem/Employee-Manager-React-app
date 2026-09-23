const employees = [
  {
    id: 1,
    email: "raheem@employee.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a professional and responsive login page for the employee manager application.",
        taskDate: "2026-09-22",
        category: "Design"
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard UI",
        taskDescription: "Create the main dashboard layout with navigation, task cards and employee information.",
        taskDate: "2026-09-24",
        category: "Development"
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup React Router",
        taskDescription: "Configure routes for login, employee dashboard and admin dashboard.",
        taskDate: "2026-09-20",
        category: "Development"
      },
      {
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        taskTitle: "Create Mobile Layout",
        taskDescription: "Make the dashboard responsive for mobile devices.",
        taskDate: "2026-09-18",
        category: "Design"
      }
    ]
  },

  {
    id: 2,
    email: "arjun@employee.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Create API Documentation",
        taskDescription: "Document all employee management API endpoints and their request formats.",
        taskDate: "2026-09-23",
        category: "Documentation"
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement User API",
        taskDescription: "Develop API endpoints for creating, updating and retrieving employee information.",
        taskDate: "2026-09-25",
        category: "Backend"
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Create the initial employee and task database structure.",
        taskDate: "2026-09-19",
        category: "Database"
      }
    ]
  },

  {
    id: 3,
    email: "sara@employee.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Employee Cards",
        taskDescription: "Design reusable employee cards displaying employee details and task statistics.",
        taskDate: "2026-09-22",
        category: "Design"
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Task Components",
        taskDescription: "Build reusable React components for displaying employee tasks.",
        taskDate: "2026-09-24",
        category: "Frontend"
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Color System",
        taskDescription: "Define the application's primary, secondary and status colors.",
        taskDate: "2026-09-18",
        category: "Design"
      },
      {
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        taskTitle: "Create Landing Page",
        taskDescription: "Build the initial landing page for the employee management application.",
        taskDate: "2026-09-17",
        category: "Frontend"
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Tailwind CSS",
        taskDescription: "Configure Tailwind CSS and establish the initial styling system.",
        taskDate: "2026-09-16",
        category: "Frontend"
      }
    ]
  },

  {
    id: 4,
    email: "john@employee.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Authentication",
        taskDescription: "Fix login authentication issues and validate employee credentials.",
        taskDate: "2026-09-22",
        category: "Backend"
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Logout",
        taskDescription: "Add logout functionality and clear the current user session.",
        taskDate: "2026-09-23",
        category: "Development"
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Login Logic",
        taskDescription: "Implement basic employee and admin login validation.",
        taskDate: "2026-09-19",
        category: "Development"
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Login Form",
        taskDescription: "Test login form validation with different employee credentials.",
        taskDate: "2026-09-20",
        category: "Testing"
      }
    ]
  },

  {
    id: 5,
    email: "priya@employee.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Test Cases",
        taskDescription: "Create test cases for employee dashboard functionality.",
        taskDate: "2026-09-22",
        category: "Testing"
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Task Creation",
        taskDescription: "Verify that admins can create and assign tasks to employees.",
        taskDate: "2026-09-24",
        category: "Testing"
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Dashboard",
        taskDescription: "Perform functional testing on the employee dashboard.",
        taskDate: "2026-09-18",
        category: "Testing"
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Check Responsive UI",
        taskDescription: "Test the application layout on different screen sizes.",
        taskDate: "2026-09-19",
        category: "Testing"
      },
      {
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        taskTitle: "Browser Compatibility",
        taskDescription: "Check application compatibility across different browsers.",
        taskDate: "2026-09-17",
        category: "Testing"
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Test Report",
        taskDescription: "Prepare a report containing the results of application testing.",
        taskDate: "2026-09-25",
        category: "Documentation"
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    email: "admin@employeemanager.com",
    pass: "123"
  }
]

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
 const employees= JSON.parse(localStorage.getItem('employees'))
 const admin= JSON.parse(localStorage.getItem('admin'))
 return {employees,admin}

 
}