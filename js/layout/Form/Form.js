import Check from '../../../ui/Check.js'

const Form = () => {
  const className = 'form'
  
  return `
    <form
      class=${className}
      id='form'
      novalidate
    >
      <object class='${className}__background' id="background" type="image/svg+xml" data="images/peopleBackground.svg"></object>
      <h1 class='${className}__title'>New user?</h1>
      <p class='${className}__description'>Use the form below to create your account.</p>
      
      <div class='${className}__inputs'>

        <div class='${className}__input name'>
          <label for='firstname'>First Name</label>
          <input
            type='text' 
            id='firstname'
          >
          <div class='warning__name'></div>
        </div>

        <div class='${className}__input lastName'>
          <label for='lastname'>Last Name</label>
          <input
            type='text' 
            id='lastname'
          >
          <div class='warning__lastName'></div>
        </div>

        <div class='${className}__input nationality'>
          <label for='nationality'>Nationality</label>
          <select id="nationality">
            <option></option>
            <option value='belarusian'>Belarusian</option>
            <option value='ukrainian'>Ukrainian</option>
            <option value='russian'>Russian</option>
            <option value='american'>American</option>
            <option value='pole'>Pole</option>
            <option value='french'>French</option>
            <option value='lithuanian'>Lithuanian</option>
            <option value='lithuanian'>Lithuanian</option>
          </select>
        </div>

        <div class='${className}__input email'>
          <label for='email'>E-mail</label>
          <input
            type='email'
            id='email'
          >
          <div class='${className}__check'>${Check()}</div>
          <div class='warning__email'></div>
        </div>

        <div class='${className}__input date'>
          <label for='select'>Date of Birth</label>
          <div  class='${className}__selects'>
            <select id="day">
              <option></option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option>
              <option value='15'>15</option>
              <option value='16'>16</option>
              <option value='17'>17</option>
              <option value='18'>18</option>
              <option value='19'>19</option>
              <option value='20'>20</option>
              <option value='21'>21</option>
              <option value='22'>22</option>
              <option value='23'>23</option>
              <option value='24'>24</option>
              <option value='25'>25</option>
              <option value='26'>26</option>
              <option value='27'>27</option>
              <option value='28'>28</option>
              <option value='29'>29</option>
              <option value='30'>30</option>
              <option value='31'>31</option>
            </select>

            <select id="month">
              <option></option>
              <option value='january'>January</option>
              <option value='february'>February</option>
              <option value='march'>March</option>
              <option value='april'>April</option>
              <option value='may'>May</option>
              <option value='june'>June</option>
              <option value='july'>July</option>
              <option value='august'>August</option>
              <option value='september'>September</option>
              <option value='october'>October</option>
              <option value='november'>November</option>
              <option value='december'>December</option>
            </select>

            <select id="year">
              <option></option>
              <option value='1990'>1990</option>
              <option value='1991'>1991</option>
              <option value='1992'>1992</option>
              <option value='1993'>1993</option>
              <option value='1994'>1994</option>
              <option value='1995'>1995</option>
              <option value='1996'>1996</option>
              <option value='1997'>1997</option>
              <option value='1998'>1998</option>
              <option value='1999'>1999</option>
              <option value='2000'>2000</option>
              <option value='2001'>2001</option>
              <option value='2002'>2002</option>
              <option value='2003'>2003</option>
              <option value='2004'>2004</option>
              <option value='2005'>2005</option>
              <option value='2006'>2006</option>
              <option value='2007'>2007</option>
              <option value='2008'>2008</option>
              <option value='2009'>2009</option>
              <option value='2010'>2010</option>
              <option value='2011'>2011</option>
              <option value='2012'>2012</option>
              <option value='2013'>2013</option>
              <option value='2014'>2014</option>
              <option value='2015'>2015</option>
              <option value='2016'>2016</option>
            </select>
          </div>
         
        </div>

        <div class='${className}__input gender'>
          <label>Gender</label>
          <div class='${className}__radios'>
            <div class='${className}__radio'>
              <input 
                type='radio'
                name='gender'
                value='male'
                id='male'
              >
              <p>Male</p>
            </div>

            <div class='${className}__radio'>
              <input 
                type='radio'
                name='gender'
                value='female'
                id='female'
              >
              <p>Female</p>
            </div>
          </div>
        </div>

        <div class='${className}__input password'>
          <label for='password'>Password</label>
          <input
            type='password'
            id='password'
          >
          <div class='warning__password'></div>
        </div>

        <div class='${className}__input confirm'>
          <label for='confirmPassword'>Confirm password</label>
          <input
            type='password'
            id='confirmPassword'
          >
          <div class='warning__confimPassword'></div>
        </div>
      </div>

      <button class='${className}__submit'>Complete Signup</button>
      
      <p class='${className}__login'>
        Have an account?
        <a href='/'>Login</a>
      </p>
    </form>
  `
}

export default Form