// https://www.redditstatic.com/desktop2x/Download OBS Modal.f2ffd191a1811857a239.js
// Retrieved at 5/26/2021, 2:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Download OBS Modal"], {
		"./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/DownloadOBSModal.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var l = a("./src/config.ts"),
				n = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				d = a("./src/lib/lessComponent.tsx"),
				c = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = a("./src/reddit/controls/Button/index.tsx"),
				u = a("./src/reddit/controls/TextButton/index.tsx"),
				m = a("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				b = a("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/index.m.less"),
				p = a.n(b);
			const h = d.a.wrapped(c.f, "ModalFooter", p.a),
				E = d.a.wrapped(c.h, "ModalHeader", p.a),
				k = d.a.wrapped(c.k, "ModalMain", p.a),
				f = d.a.wrapped(c.d, "ModalBody", p.a),
				N = d.a.wrapped(c.o, "ModalText", p.a),
				w = d.a.a("Link", p.a),
				_ = "https://github.com/reddit/rpan-studio/releases/download/25.0.7.7-rpan/RPAN.Studio.Quick.Start.pdf";
			t.default = Object(o.a)(({
				onClickDismiss: e,
				onClickDownload: t,
				onClickGuidebook: a
			}) => r.a.createElement(f, null, r.a.createElement(E, null, r.a.createElement(u.a, {
				onClick: e,
				className: p.a.TextButton
			}, r.a.createElement(c.b, {
				className: p.a.closeIcon
			})), r.a.createElement("div", {
				className: p.a.titleContainer
			}, r.a.createElement("div", {
				className: p.a.Title
			}, n.fbt._("Broadcast live from your desktop with RPAN studio", null, {
				hk: "2dX34K"
			})), r.a.createElement(N, null, n.fbt._("Now you don't need a phone to start a live broadcast. RPAN Studio lets you broadcast, chat, and view your state from your computer's desktop.", null, {
				hk: "41yzzg"
			})), r.a.createElement("img", {
				src: `${l.a.assetPath}/img/obs-img.png`,
				className: p.a.OBSImage
			}))), r.a.createElement(k, null, r.a.createElement("span", null, r.a.createElement(m.c, {
				className: p.a.VideoLive
			}), r.a.createElement("span", null, r.a.createElement("div", {
				className: p.a.SubTitle
			}, n.fbt._("What is RPAN studio", null, {
				hk: "sV7v8"
			})), r.a.createElement(c.n, null, n.fbt._("RPAN Studio is a completely free desktop application built on top of OBS (Open Broadcaster Software) that lets broadcasters stream directly to RPAN.", null, {
				hk: "3c3glk"
			})))), r.a.createElement("span", null, r.a.createElement(m.b, {
				className: p.a.Image
			}), r.a.createElement("span", null, r.a.createElement("div", {
				className: p.a.SubTitle
			}, n.fbt._("How to get started", null, {
				hk: "2n5K34"
			})), r.a.createElement(c.n, null, n.fbt._("Visit Github to download RPAN Studio, then check out the {=user guide} for tips on how to set things up.", [n.fbt._param("=user guide", r.a.createElement(w, {
				href: _,
				target: "_blank"
			}, n.fbt._("user guide", null, {
				hk: "15fNqE"
			})))], {
				hk: "1yEANl"
			})))), r.a.createElement("span", null, r.a.createElement(m.a, {
				className: p.a.Image
			}), r.a.createElement("span", null, r.a.createElement("div", {
				className: p.a.SubTitle
			}, n.fbt._("Join the community", null, {
				hk: "lgMPk"
			})), r.a.createElement(c.n, null, n.fbt._("Connect with your fellow broadcasters, share best practices, and chat about your craft in {=r/RPANStudio} .", [n.fbt._param("=r/RPANStudio", r.a.createElement(w, {
				href: "https://www.reddit.com/r/RPANStudio",
				target: "_blank"
			}, n.fbt._("r/RPANStudio", null, {
				hk: "3O8hMj"
			})))], {
				hk: "2qEvgH"
			}))))), r.a.createElement(h, {
				className: p.a.ModalFooter
			}, r.a.createElement(i.m, {
				href: _,
				className: p.a.button,
				target: "_blank",
				onClick: t,
				"data-redditstyle": !0
			}, n.fbt._("Download the User Guide", null, {
				hk: "3WO5Lv"
			})), r.a.createElement(i.j, {
				href: "https://github.com/reddit/rpan-studio/releases",
				className: p.a.button,
				target: "_blank",
				onClick: a,
				"data-redditstyle": !0
			}, n.fbt._("Download from Github", null, {
				hk: "1bm9js"
			})))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Download OBS Modal.f2ffd191a1811857a239.js.map