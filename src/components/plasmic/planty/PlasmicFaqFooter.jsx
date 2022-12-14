// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bJmo2tdG6kQGZ4iwYBrjeU
// Component: YiV8tMfamkAsfR
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
import sty from "./PlasmicFaqFooter.module.css"; // plasmic-import: YiV8tMfamkAsfR/css
import LocationSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__LocationSvgrepoCom1Svg"; // plasmic-import: rzNXoG5FXGHSqt/icon
import LogoWhitesvgIcon from "./icons/PlasmicIcon__LogoWhitesvg"; // plasmic-import: BoIvXwBIdWRSpK/icon
import promowebpGyPoErzUzN2Sxm from "./images/promowebp.webp"; // plasmic-import: GyPoErzUzN2sxm/picture

export const PlasmicFaqFooter__VariantProps = new Array();

export const PlasmicFaqFooter__ArgProps = new Array();

function PlasmicFaqFooter__RenderFunc(props) {
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
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__zlcrf)}>
          <div className={classNames(projectcss.all, sty.columns___8RgS)}>
            <div className={classNames(projectcss.all, sty.column__dqFtd)}>
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"562px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"947px"}
                loading={"lazy"}
                src={{
                  src: promowebpGyPoErzUzN2Sxm,
                  fullWidth: 720,
                  fullHeight: 525,
                  aspectRatio: undefined
                }}
              />
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column___6UCBh)}
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
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "Behold our FAQ"
                  : "Still have questions?\nContact us. "}
              </h1>

              <div className={classNames(projectcss.all, sty.columns__kD7X)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__gs1N1)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__h6Dua
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Behold our FAQ"
                      : "226 rue St-Joseph E, \nQu??bec, QC, Canada, \nG1K 3A9"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hrGpa
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Behold our FAQ"
                      : "+1-202-555-0112"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__rFwNo)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3CyQ5
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Behold our FAQ"
                      : "geeks@snipcart.com"}
                  </div>

                  {(
                    hasVariant(globalVariants, "screen", "mobile") ? true : true
                  ) ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__viIrf)}
                    >
                      {(
                        hasVariant(globalVariants, "screen", "mobile")
                          ? true
                          : true
                      ) ? (
                        <p.Stack
                          as={"a"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__lkKkY
                          )}
                        >
                          <LocationSvgrepoCom1SvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__eOwyC
                            )}
                            role={"img"}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__unN7O
                            )}
                          >
                            {hasVariant(globalVariants, "screen", "mobile")
                              ? "Discover"
                              : "On the map"}
                          </div>
                        </p.Stack>
                      ) : null}
                    </div>
                  ) : null}
                </p.Stack>

                <div
                  className={classNames(projectcss.all, sty.column__pleVv)}
                />
              </div>
            </p.Stack>
          </div>
        </div>
      ) : null}
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__zxPto)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___4RsZy)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ioUwW)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              ) ? (
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
                  className={classNames(projectcss.all, sty.freeBox___2OyXy)}
                >
                  <LogoWhitesvgIcon
                    className={classNames(projectcss.all, sty.svg__gFwlE)}
                    role={"img"}
                  />

                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___0Q6V3
                    )}
                    href={"#"}
                  >
                    {"Store"}
                  </a>

                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__oIqH
                    )}
                    href={"#"}
                  >
                    {"About"}
                  </a>

                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__sn52Z
                    )}
                    href={"#"}
                  >
                    {"Faq"}
                  </a>
                </p.Stack>
              ) : null}

              <div className={classNames(projectcss.all, sty.freeBox__enUqT)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__btR4C
                  )}
                >
                  {
                    "?? Company. All rights reserved. This site proudly built with "
                  }
                </div>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__cKv8D
                  )}
                  href={"https://www.plasmic.app/"}
                >
                  {"Plasmic"}
                </a>
              </div>
            </p.Stack>
          </p.Stack>
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "h1", "menuButton"],
  img: ["img"],
  h1: ["h1"],
  menuButton: ["menuButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFaqFooter__ArgProps,
          internalVariantPropNames: PlasmicFaqFooter__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicFaqFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFaqFooter";
  } else {
    func.displayName = `PlasmicFaqFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFaqFooter = Object.assign(
  // Top-level PlasmicFaqFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    menuButton: makeNodeComponent("menuButton"),
    // Metadata about props expected for PlasmicFaqFooter
    internalVariantProps: PlasmicFaqFooter__VariantProps,
    internalArgProps: PlasmicFaqFooter__ArgProps
  }
);

export default PlasmicFaqFooter;
/* prettier-ignore-end */
