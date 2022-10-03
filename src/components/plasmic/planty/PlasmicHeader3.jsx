// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bJmo2tdG6kQGZ4iwYBrjeU
// Component: 9fASFiAt8NFNyT
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
import IconLink from "../../IconLink"; // plasmic-import: 31ZaSqaLWv89h7/component
import { useScreenVariants as useScreenVariantsmSPqrdrCRlH2Q } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: mSPqrdrCRlH2Q-/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: bJmo2tdG6kQGZ4iwYBrjeU/projectcss
import sty from "./PlasmicHeader3.module.css"; // plasmic-import: 9fASFiAt8NFNyT/css
import LogoWhitesvgIcon from "./icons/PlasmicIcon__LogoWhitesvg"; // plasmic-import: BoIvXwBIdWRSpK/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: T8GXCLirF8-x3i/icon

export const PlasmicHeader3__VariantProps = new Array();

export const PlasmicHeader3__ArgProps = new Array();

function PlasmicHeader3__RenderFunc(props) {
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

  return true ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <MenuButton
          data-plasmic-name={"menuButton"}
          data-plasmic-override={overrides.menuButton}
          className={classNames("__wab_instance", sty.menuButton)}
        />
      ) : null}

      <LogoWhitesvgIcon
        className={classNames(projectcss.all, sty.svg__nobN)}
        role={"img"}
      />

      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___8Cmhf)}
        >
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__tOzS
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
              sty.link__gToZo
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
              sty.link__puwJs
            )}
            href={`/faq`}
          >
            {hasVariant(globalVariants, "screen", "mobile") ? "Faq" : "Faq"}
          </a>
        </p.Stack>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__wOvIh)}
      >
        <IconLink
          data-plasmic-name={"iconLink"}
          data-plasmic-override={overrides.iconLink}
          className={classNames("__wab_instance", sty.iconLink)}
          icon={
            <React.Fragment>
              <IconIcon
                className={classNames(projectcss.all, sty.svg__qUcgs)}
                role={"img"}
              />

              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"0"}
              </div>
            </React.Fragment>
          }
        />
      </p.Stack>
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "iconLink", "text"],
  menuButton: ["menuButton"],
  iconLink: ["iconLink", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader3__ArgProps,
          internalVariantPropNames: PlasmicHeader3__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicHeader3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader3";
  } else {
    func.displayName = `PlasmicHeader3.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader3 = Object.assign(
  // Top-level PlasmicHeader3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    iconLink: makeNodeComponent("iconLink"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHeader3
    internalVariantProps: PlasmicHeader3__VariantProps,
    internalArgProps: PlasmicHeader3__ArgProps
  }
);

export default PlasmicHeader3;
/* prettier-ignore-end */
