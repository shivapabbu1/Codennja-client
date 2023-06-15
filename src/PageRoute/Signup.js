import React from 'react'
import "./Login.css"
const Signup = () => {
  return (
  <>

<div class="modal fade" id="LoginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Signup</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action='http://localhost:4000/register' method='post'>
				
				
				<div>
        <input type="email" name="email" placeholder="Email" required=""/>
        </div>
				<div>
        <input type="password" name="password" placeholder="Password" required=""/>
        </div>
        <div>
        <input type="number" name="phone" placeholder="Mobile" required=""/>
        </div>
					<button class="btn btn-primary">Sign up</button>
                  <h6>  <a href='/Login'>Already a user please login... </a></h6>
                    </form>
      </div>
     
    </div>
  </div>
</div>
  </>
  )
}

export default Signup