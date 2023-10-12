/* start variables area coding */
let budget_btn = document.getElementById("budget-btn");
let budget = document.getElementById("budget");
let t_budget = document.getElementById("total-budget");
let product_btn = document.getElementById("product-btn");
let title = document.getElementById("title");
let cost = document.getElementById("cost");
let expense_list = document.getElementById("expense-list")

/* end variables area coding */

//start budget in local storage

budget_btn.onclick = (e) =>{
    e.preventDefault();
    if(budget.value != ""){

        localStorage.setItem("Budget",budget.value);
        location.href = location.href;
    }
    else{
   alert("Please enter the budget value")
    }
}

//store product info

 product_btn.onclick = (e) =>{
    e.preventDefault();
    if(title.value != "" && cost.value != "" )
    {
        var p_title = title.value;
        var p_cost = cost.value;
        var data = {
            p_cost : p_cost,
            p_title : p_title
        }
       localStorage.setItem("Budget_"+title.value,JSON.stringify(data));
    }
    else{
        alert("Field is empty");
    }
}

//retrive data from local storage

const all_data = () =>{
   for(let i=0;i<localStorage.length;i++)
   {
    let all_keys = localStorage.key(i)
    if(all_keys.match("Budget_"))
    {
        let jsonData = localStorage.getItem(all_keys);
        let json_parse = JSON.parse(jsonData);
       
    }
   }
     t_budget.innerHTML = localStorage.getItem("Budget");

};
all_data();