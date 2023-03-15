import Head from "next/head"
import Router from "next/router"

export default function QuickSort() {
    function quicksort(array) {
        if (array.length <= 1) {
          return array;
        }
      
        let pivot = array[0];
        
        let left = []; 
        let right = [];
      
        for (let i = 1; i < array.length; i++) {
          array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
        }
      
        return quicksort(left).concat(pivot, quicksort(right));
      };
      
    const unsorted = [23, 45, 16, 37, 3, 99, 22];
      

    return (
        <>
            <Head>
                <title>Quick Sort</title>
            </Head>
            <h1>Quick Sort</h1>

            <p>Quicksort is unique because its speed depends on the pivot you choose.</p>
            <p>Quicksort is a tricky case. In the worst case, quicksort takse O(n^2) time</p>
            {quicksort(unsorted).join(' ')}
            <br />
            <br />
            <h1>RECAP</h1>
            <p>D&C works by breaking a problem down into smaller and smaller pieces. If you're using D&C on a list, the base case is probably an empty array or an array with one element.</p>
            <p>If you're implementing quicksort, choose a random element as the pivot. The average runtime of quicksort is O(n log n)!</p>
            <p>The constant in Big O notation can matter sometimes. That's why quicksort is faster than merge sort.</p>
            <p>The constant almost never matters for simple search versus binary search, because O(log n) is so much faster than O(n) when your list gets big.</p>


            <button onClick={() => Router.push('/')}>Go back home</button>
        </>
    )
}