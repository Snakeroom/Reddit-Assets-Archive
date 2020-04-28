// https://www.redditstatic.com/desktop2x/reddit-components-Settings-CreatePasswordSSOModal.5f59f49f1d5efb22515e.js
// Retrieved at 4/28/2020, 12:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Settings-CreatePasswordSSOModal"], {
		"./src/reddit/components/EmailCollection/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1yYBGklEZ27AA6Pk4a5xcB",
				content: "_1tsHXJq8O99kY-Hnw0TU9H",
				envelopeIcon: "_2MwJgJPAzuZmaOVwlLfjeO",
				warningIcon: "_1UqQ04HyR3qGPylb_9baOq"
			}
		},
		"./src/reddit/components/EmailCollection/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/icons/svgs/Envelope/index.tsx"),
				r = s("./src/reddit/icons/svgs/Warning/index.tsx"),
				i = s("./src/reddit/components/EmailCollection/Envelope/index.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("div", {
				className: Object(a.a)(c.a.container, e.className)
			}, n.a.createElement("div", {
				className: c.a.content
			}, n.a.createElement(l.a, {
				className: c.a.envelopeIcon
			}), n.a.createElement(r.a, {
				className: Object(a.a)(c.a.warningIcon, e.warningClassName)
			})))
		},
		"./src/reddit/components/Settings/CreatePasswordSSOModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWrapper: "pD9WAqj9jQhBX4jo2qPbW",
				primaryBtn: "_2nbzAE6WpO_TxWtzx-VgKd",
				description: "_27tUxTtZvDc5p24lBmCh_H"
			}
		},
		"./src/reddit/components/Settings/CreatePasswordSSOModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/users.ts"),
				c = s("./node_modules/fbt/lib/FbtPublic.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				p = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/EmailCollection/Envelope/index.tsx"),
				u = s("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				w = s("./src/reddit/components/Settings/CreatePasswordSSOModal/index.m.less"),
				g = s.n(w);
			var E = e => n.a.createElement(u.a, {
				icon: n.a.createElement(m.a, null),
				description: c.fbt._("We sent a message to {email} with a link to create your password.", [c.fbt._param("email", e.userEmail || "")], {
					hk: "2YDohi"
				}),
				onClose: e.onClose,
				title: c.fbt._("Check your email", null, {
					hk: "1gDhgD"
				})
			}, n.a.createElement("div", {
				className: g.a.buttonWrapper
			}, n.a.createElement(h.f, {
				className: Object(p.a)(g.a.commonBtn, g.a.primaryBtn),
				onClick: e.onClose,
				redditStyle: !0
			}, c.fbt._("Ok", null, {
				hk: "wn6jy"
			}))));
			var C, b = e => n.a.createElement(u.a, {
				icon: n.a.createElement(m.a, null),
				description: e.description,
				onClose: e.onClose,
				title: e.title
			}, n.a.createElement("div", {
				className: g.a.buttonWrapper
			}, n.a.createElement(h.i, {
				onClick: e.onClose,
				redditStyle: !0
			}, c.fbt._("Cancel", null, {
				hk: "Dz9bg"
			})), n.a.createElement(h.f, {
				className: Object(p.a)(g.a.commonBtn, g.a.primaryBtn),
				onClick: e.handleContinueClick,
				redditStyle: !0
			}, c.fbt._("Continue", null, {
				hk: "2U1GLB"
			}))));
			! function(e) {
				e[e.Prompt = 0] = "Prompt", e[e.Confirmation = 1] = "Confirmation"
			}(C || (C = {}));
			class k extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						step: C.Prompt
					}, this.handleContinueClick = () => {
						this.sendResetPasswordEmail(), this.setState({
							step: C.Confirmation
						})
					}, this.sendResetPasswordEmail = () => {
						this.props.userEmail && this.props.username && this.props.sendResetEmail({
							curEmail: this.props.userEmail,
							name: this.props.username
						})
					}
				}
				render() {
					return this.state.step === C.Prompt ? n.a.createElement(b, {
						description: this.props.description,
						handleContinueClick: this.handleContinueClick,
						onClose: this.props.onClose,
						title: this.props.title
					}) : n.a.createElement(E, {
						onClose: this.props.onClose,
						userEmail: this.props.userEmail
					})
				}
			}
			var O = Object(d.a)(k);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = e => n.a.createElement(o.Fragment, null, e.resetPasswordForEmailModalOpen && n.a.createElement(O, x({
					description: c.fbt._("To change your email address, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "2cstEg"
					}),
					title: c.fbt._("Change your email address", null, {
						hk: "3GlFK"
					}),
					onClose: e.closeResetPasswordForEmailModal,
					onOverlayClick: e.closeResetPasswordForEmailModal,
					withOverlay: !0
				}, e)), e.resetPasswordForAppleLinkModalOpen && n.a.createElement(O, x({
					description: c.fbt._("To connect your Apple ID, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "2agOta"
					}),
					title: c.fbt._("Connect your Apple ID", null, {
						hk: "Cg7l9"
					}),
					onClose: e.closeResetPasswordForAppleLinkModal,
					onOverlayClick: e.closeResetPasswordForAppleLinkModal,
					withOverlay: !0
				}, e)), e.resetPasswordForAppleLinkModalOpen && n.a.createElement(O, x({
					description: c.fbt._("To connect your Apple ID, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "2agOta"
					}),
					title: c.fbt._("Connect your Apple ID", null, {
						hk: "Cg7l9"
					}),
					onClose: e.closeResetPasswordForAppleLinkModal,
					onOverlayClick: e.closeResetPasswordForAppleLinkModal,
					withOverlay: !0
				}, e)), e.resetPasswordForAppleUnlinkModalOpen && n.a.createElement(O, x({
					description: c.fbt._("To disconnect your Apple ID, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "47P4uJ"
					}),
					title: c.fbt._("Disconnect from Apple", null, {
						hk: "1UpB3j"
					}),
					onClose: e.closeResetPasswordForAppleUnlinkModal,
					onOverlayClick: e.closeResetPasswordForAppleUnlinkModal,
					withOverlay: !0
				}, e)), e.resetPasswordForGoogleLinkModalOpen && n.a.createElement(O, x({
					description: c.fbt._("To connect your Google account, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "4xWcaj"
					}),
					title: c.fbt._("Connect your Google Account", null, {
						hk: "3JniU1"
					}),
					onClose: e.closeResetPasswordForGoogleLinkModal,
					onOverlayClick: e.closeResetPasswordForGoogleLinkModal,
					withOverlay: !0
				}, e)), e.resetPasswordForGoogleUnlinkModalOpen && n.a.createElement(O, x({
					description: c.fbt._("To disconnect your Google account, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "2MyWqh"
					}),
					title: c.fbt._("Disconnect from Google", null, {
						hk: "2sw2TE"
					}),
					onClose: e.closeResetPasswordForGoogleUnlinkModal,
					onOverlayClick: e.closeResetPasswordForGoogleUnlinkModal,
					withOverlay: !0
				}, e))),
				f = s("./src/reddit/components/Settings/modalIds.ts"),
				v = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/user.ts");
			const j = Object(l.c)({
					resetPasswordForEmailModalOpen: Object(y.b)(f.f),
					resetPasswordForAppleLinkModalOpen: Object(y.b)(f.d),
					resetPasswordForAppleUnlinkModalOpen: Object(y.b)(f.e),
					resetPasswordForGoogleLinkModalOpen: Object(y.b)(f.g),
					resetPasswordForGoogleUnlinkModalOpen: Object(y.b)(f.h),
					userEmail: P.l,
					username: e => {
						const t = Object(P.i)(e);
						return t && Object(v.f)(t) || ""
					}
				}),
				M = Object(a.b)(j, e => ({
					closeResetPasswordForEmailModal: () => e(Object(r.g)(f.f)),
					closeResetPasswordForAppleLinkModal: () => e(Object(r.g)(f.d)),
					closeResetPasswordForAppleUnlinkModal: () => e(Object(r.g)(f.e)),
					closeResetPasswordForGoogleLinkModal: () => e(Object(r.g)(f.g)),
					closeResetPasswordForGoogleUnlinkModal: () => e(Object(r.g)(f.h)),
					sendResetEmail: t => e(Object(i.z)(t))
				}));
			t.default = M(e => e.userEmail && e.username ? n.a.createElement(_, e) : null)
		},
		"./src/reddit/components/Settings/ModalContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1AaXuuXcppN6z3lyjemnkL",
				closeButton: "_2n58ofMJPg93rBexzKK_eC",
				closeIcon: "_1-aRvaXjqzrU9zAXYkO31N",
				header: "_3A-cwt8Ht4zvde70Pjy__E",
				icon: "_1x_pYy_fmCQxsGD3ovvgfw",
				title: "_19eT5Znm4YIntTUHAcYrX3",
				description: "veTQ6x5JgIlwMg7Auj1Sd",
				body: "iTEI6v2GvrdU6pwBMDd_j"
			}
		},
		"./src/reddit/components/Settings/ModalContainer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/icons/svgs/Close/index.tsx"),
				r = s("./src/reddit/components/Settings/ModalContainer/index.m.less"),
				i = s.n(r);
			t.a = e => {
				const {
					children: t,
					className: s,
					description: o,
					descriptionClassName: r,
					icon: c,
					onClose: d,
					title: p
				} = e;
				return n.a.createElement("div", {
					className: Object(a.a)(i.a.container, s)
				}, n.a.createElement("button", {
					className: i.a.closeButton,
					onClick: d
				}, n.a.createElement(l.a, {
					className: i.a.closeIcon
				})), n.a.createElement("div", {
					className: i.a.header
				}, c && n.a.createElement("div", {
					className: i.a.icon
				}, c), n.a.createElement("h2", {
					className: i.a.title
				}, p)), o && n.a.createElement("p", {
					className: Object(a.a)(i.a.description, r)
				}, o), n.a.createElement("div", {
					className: i.a.body
				}, t))
			}
		},
		"./src/reddit/icons/svgs/Warning/index.m.less": function(e, t, s) {
			e.exports = {
				warning: "_3ppQRTaxPs0X9rsFYHfSdf"
			}
		},
		"./src/reddit/icons/svgs/Warning/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/icons/svgs/Warning/index.m.less"),
				r = s.n(l);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.warning, e.className),
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("circle", {
				r: "9",
				cx: "9",
				cy: "9"
			}), n.a.createElement("path", {
				d: "m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-1 -1)"
			}))
		}
	}
]);
//# sourceMappingURL=reddit-components-Settings-CreatePasswordSSOModal.5f59f49f1d5efb22515e.js.map