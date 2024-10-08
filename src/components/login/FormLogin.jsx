import Image from "next/image";
import React from "react";
import logo from "@/img/one-second.svg";
import Link from "next/link";
import Span from "./Span";

const FormLogin = () => {
  return (
    <section>
      <Span />
      <div class="signin">
        <div class="content">
          <Link href="/">
            <Image src={logo} alt="logo" width={150} height={70} />
          </Link>
          <div class="form">
            <div class="inputBox">
              <input type="text" required />
              <i>Email</i>
            </div>
            <div class="inputBox">
              <input type="password" required />
              <i>Contraseña</i>
            </div>
            <div class="links">
              <a href="#">¿Olvidaste tu contraseña?</a>
              <a href="#">Registrarse</a>
            </div>
            <div class="inputBox">
              <input type="submit" value="Ingresar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormLogin;
