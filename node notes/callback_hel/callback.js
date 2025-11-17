function task1(task2){
    console.log("Task 1 complete");
        setTimeout(()=>{
            task2()
        },2000)
    
}
function task2(){
    console.log("task 2 complete")
}
task2(task1)