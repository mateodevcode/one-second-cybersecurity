import Autor from "@/components/blog/Autor";
import CodeBlock from "@/components/blog/CodeBlock";
import ImgCompleta from "@/components/blog/ImgCompleta";
import Parrafo from "@/components/blog/Parrafo";
import Subtitulo from "@/components/blog/Subtitulo";
import Titulo from "@/components/blog/Titulo";
import VideoLink from "@/components/blog/VideoLink";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="lg:w-7/12 md:w-7/12 sm:w-11/12 flex flex-col justify-start items-start">
      <Titulo />
      <Autor />
      <ImgCompleta />
      <Subtitulo nombre="Introducción" />
      <Parrafo
        parrafo1={
          <p>
            Cuando investigas el <strong>mercado de la programación,</strong> es
            muy común encontrarte con el nombre JavaScript. Y no es de extrañar,
            este lenguaje está presente en toda la <strong>Web</strong> y
            probablemente lo enfrentarás todos los días cuando uses tu{" "}
            <strong>navegador</strong> (¡y hasta fuera!).
          </p>
        }
        parrafo2={
          <p>
            ¡Veamos en este artículo qué hace que JavaScript sea un lenguaje tan
            relevante y ampliamente utilizado hoy en día!
          </p>
        }
      />
      <VideoLink
        Url={
          <p className="lg:text-xl md:text-xl sm:text-base mt-5 dark:text-white leading-relaxed">
            Video:{" "}
            <Link
              href="https://www.youtube.com/watch?v=2Ji7z8pJf7k"
              className="text-blue-700"
            >
              ¿Qué es JavaScript?
            </Link>
          </p>
        }
      />
      <Subtitulo nombre="¿Qué es JavaScript?" />
      <Parrafo
        parrafo1={
          <p>
            JavaScript, o JS, como muchos lo llaman cariñosamente, es un
            <strong>
              lenguaje de programación interpretado de alto nivel
            </strong>{" "}
            que, según la{" "}
            <Link href={"/"} className="text-blue-600 underline">
              Encuesta de Desarrolladores de StackOverflow de 2022,
            </Link>{" "}
            es el más popular del mundo. Esto se debe principalmente a que
            JavaScript es el lenguaje estándar que interpretan los navegadores y
            que con{" "}
            <Link href={"/"} className="text-blue-600 underline">
              HTML (HyperText Markup Language o Lenguaje de marcado de
              hipertexto, utilizado en los navegadores)
            </Link>{" "}
            y{" "}
            <Link href={"/"} className="text-blue-600 underline">
              CSS (Cascading Style Sheets, hojas de estilo en cascada, en
              español)
            </Link>{" "}
            forman la <strong>base de toda la Web.</strong>
          </p>
        }
        parrafo2={null}
      />
      <Subtitulo nombre={"Historia de JavaScript"} />
      <Parrafo
        parrafo1={
          <p>
            Ahora que sabemos qué es JavaScript, ¿qué tal si entendemos más
            sobre su historia?
          </p>
        }
        parrafo2={
          <p>
            Los años 90 estuvieron marcados por una{" "}
            <strong>gran disputa en el mercado de los navegadores</strong>. En
            este momento de la historia, Netscape, responsable de Netscape
            Navigator, buscó destacarse en la “guerra de los navegadores” y para
            eso planeó construir algo que dinamizara la navegación, lo que para
            la época sería un gran <strong>diferencial</strong>, porque para{" "}
            <strong>cargar una página simples tomaba mucho tiempo.</strong>
          </p>
        }
      />
      <Subtitulo nombre={"El verdadero poder de JavaScript"} />
      <Parrafo
        parrafo1={
          <p>
            Desde su creación hasta hoy, JavaScript{" "}
            <strong>ha evolucionado</strong> mucho y su{" "}
            <strong>comunidad es muy fuerte y consolidada</strong>, lo que trae
            beneficios como:
          </p>
        }
        parrafo2={
          <ul className="list-disc px-10 inter leading-loose">
            <li>Facilidad de aprendizaje</li>
            <li>Gran cantidad de recursos y documentación</li>
            <li>Amplia gama de frameworks y librerías</li>
            <li>Gran cantidad de oportunidades de trabajo</li>
          </ul>
        }
      />
      <Parrafo
        parrafo1={
          <p>
            Además, como resultado de la gran comunidad, se fomenta la
            <strong>continuidad del lenguaje</strong>, lo que significa que se utiliza JS para la
            implementación de diversas herramientas, desde aplicaciones
            de <strong>grandes empresas hasta juegos y bibliotecas.</strong>
          </p>
        }
        parrafo2={null}
      />
      <Subtitulo nombre={"Tipos de datos en JavaScript"} />
      <Parrafo
        parrafo1={
          <p>
            En JavaScript el <strong>tipeo es dinámico</strong>, por lo que no es necesario declarar el tipo de una variable, solo asigna su valor y el lenguaje asume si es una secuencia de caracteres, números, indefinidos u otros. Para comprender mejor este concepto, observe el siguiente ejemplo de código:
          </p>
        }
        parrafo2={
          null
        }
      />
      <CodeBlock codigo={<p>
        {`
          import React from 'react'
          import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
          import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
                
          const CodeBlock = ({ language, value }) => {
          return (
              <SyntaxHighlighter language={language} style={vscDarkPlus}>
                  {value}
                </SyntaxHighlighter>
              )}
          export default CodeBlock
         `}       
      </p>} />
    </div>
  );
};

export default page;
