function listFunctions() {
    //this function will fill the the link-select options depening on what admin role is in the url
    var adminRole = 'ADMIN';
    console.log(adminRole);
    options = '';
    $('#link-select').empty();
    if(adminRole == 'ADMIN') {
        options = '<option>Manage User Accounts</option><option>Assign Roles</option><option>Help Desk</option>'
    }
    if(adminRole == 'FINANCE_ADMIN') {
        options == '<option>Finance Reports</option><option>Accounts Payable</option><option>Accounts Receivable</option><option>Tax</option>'
    }
    if(adminRole == 'SALES_ADMIN') {
        options = '<option>Sales Reports</option><option>Sales Leads</option><option>Sales Demo</option>'
    }
    if(adminRole == 'HR_ADMIN') {
        options = '<option>New Hire On-Boarding</option><option>Benefits</option><option>Payroll</option><option>Off-boarding</option><option>HR Reports</option>'
    }
    if(adminRole == 'TECH_ADMIN') {
        options = '<option>Application Monitoring</option><option>Tech Support</option><option>App Development</option><option>Add Admin</option><option>Release Management</option>'
    }
    console.log(options);
    $('#link-select').append(options);
}

function openLinkPage(text) {
    //this function will open a 404 page for the link after clicking go
}