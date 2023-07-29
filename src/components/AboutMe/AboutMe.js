import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";

const AboutMe = () => {
    const socialNetworks =[
        {
            name:"Github",
            link:"https://github.com/Josejimenez977",
            logo:logoGithub,
        },
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Bienvenido, Soy</p>
                        <p>José Jimenez Yancy</p>
                        <p>Backend Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                    Ing. de Sistemas, 
                    con 3 años de experiencia en el sector productivo, con experirncia en Base de datos y redes.
                    </S.DescriptionText>
                    <S.ContainerIcons>
                    {socialNetworks.map((network, index)=>(
                        <a
                            key={index}
                            href={network.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={network.logo} alt={network.name}/>
                        </a>
                    ))}
                </S.ContainerIcons>
                </S.ContainerText>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};
export default AboutMe;