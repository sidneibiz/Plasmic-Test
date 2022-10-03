// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bJmo2tdG6kQGZ4iwYBrjeU
// Component: f0WP3Kg2Vjqhf
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MenuButton from "../../MenuButton"; // plasmic-import: s5RsSqZn9G6RHH/component
import { useScreenVariants as useScreenVariantsmSPqrdrCRlH2Q } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: mSPqrdrCRlH2Q-/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: bJmo2tdG6kQGZ4iwYBrjeU/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: f0WP3Kg2Vjqhf/css
import ButtonArrowIcon from "./icons/PlasmicIcon__ButtonArrow"; // plasmic-import: xzU3U0X9EM48hf/icon
import LogoWhitesvgIcon from "./icons/PlasmicIcon__LogoWhitesvg"; // plasmic-import: BoIvXwBIdWRSpK/icon
import promowebpGyPoErzUzN2Sxm from "./images/promowebp.webp"; // plasmic-import: GyPoErzUzN2sxm/picture

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

function PlasmicFooter__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsmSPqrdrCRlH2Q()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__oAnwo)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__oia2U)}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: promowebpGyPoErzUzN2Sxm,
              fullWidth: 720,
              fullHeight: 525,
              aspectRatio: undefined
            }}
          />
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__chvxd)}
        >
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1
            )}
          >
            {"A new homeinterior for summer"}
          </h1>

          <h2
            data-plasmic-name={"h2"}
            data-plasmic-override={overrides.h2}
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2
            )}
          >
            {"from $149.99"}
          </h2>

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__cXgr3)}>
              {true ? (
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__odKo3
                  )}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oIlQv
                    )}
                  >
                    {"Discover"}
                  </div>

                  <ButtonArrowIcon
                    className={classNames(projectcss.all, sty.svg__jloAz)}
                    role={"img"}
                  />
                </a>
              ) : null}
            </div>
          ) : null}
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___3U3Qt)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___2PpZh)}
        >
          {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
            <MenuButton
              data-plasmic-name={"menuButton"}
              data-plasmic-override={overrides.menuButton}
              className={classNames("__wab_instance", sty.menuButton)}
            />
          ) : null}
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__uN86P)}
            >
              <LogoWhitesvgIcon
                className={classNames(projectcss.all, sty.svg__v3To2)}
                role={"img"}
              />

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__vkN7
                )}
                href={`/store`}
              >
                {"Store"}
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__yClx
                )}
                href={`/about`}
              >
                {"About"}
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__xA3FB
                )}
                href={`/faq`}
              >
                {"Faq"}
              </a>
            </p.Stack>
          ) : null}

          <div className={classNames(projectcss.all, sty.freeBox__zzZxT)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mOFa9
              )}
            >
              {"© Company. All rights reserved. This site proudly built with "}
            </div>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__kkGz
              )}
              href={"https://www.plasmic.app/"}
            >
              {"Plasmic"}
            </a>
          </div>
        </p.Stack>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "h1", "h2", "menuButton"],
  img: ["img"],
  h1: ["h1"],
  h2: ["h2"],
  menuButton: ["menuButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    h2: makeNodeComponent("h2"),
    menuButton: makeNodeComponent("menuButton"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
