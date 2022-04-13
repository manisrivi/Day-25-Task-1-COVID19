// Body Contents
let container = document.createElement("div");
container.innerHTML = `
<div class="container">
<div class="row">
    <div class="col-lg-4 m-2 search_col text-center">
        <img src="https://i0.wp.com/www.themedicalcareblog.com/wp-content/uploads/2020/08/shutterstock_mc4.jpg?fit=800%2C600&ssl=1" width="300" alt="">
        <h1 class="text-warning" >Covid-19 Tracker</h1>
        <input type="text" id="text" placeholder="Example: India"> <br>
        <button class="btn btn-danger" onclick="foo()">Find</button> <br>
        <img src="https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/infographic-covid-19-transmission-and-protections-final2.jpg?sfvrsn=7fc5264a_2" width="300px" alt="">
    </div>
    <div class="col m-2 table_col table-responsive">
    <table class="table table-hover text-center table-bordered table-responsive">
    <thead class="bg-primary text-light">
        <tr>
            <th>Date</th>
            <th>Active</th>
            <th>Confirmed</th>
            <th>Deaths</th>
            <th>Recoverd</th>
        </tr>
    </thead>
    <tbody id="tbody"></tbody>
    </table>
    </div>
</div>
</div>
`
document.body.append(container);

// Call Function 
async function foo() {
  //Get Data 
  let cc = document.getElementById("text").value;
  let res = await fetch(`https://api.covid19api.com/total/country/${cc}`);
  let res1 = await res.json();

  let tableData = "";
  // Map Method
  res1.map((element) => {
    tableData += `
    <tr>
      <td class="td_1 fw-bold" style="background-color: lightblue;">${new Date(element.Date).toDateString()}</td>
      <td class="td_2 fw-bold" style="background-color: rgb(161, 161, 158)">${element.Active}</td>
      <td class="td_3 fw-bold" style="background-color: rgb(219, 240, 128)">${element.Confirmed}</td>
      <td class="td_4 fw-bold" style="background-color: rgb(236, 92, 111)">${element.Deaths}</td>
      <td class="td_5 fw-bold" style="background-color: rgb(146, 231, 143)">${element.Recovered}</td>
    </tr>
        `
  });

  document.getElementById("tbody");
  tbody.innerHTML = tableData;
  
}

