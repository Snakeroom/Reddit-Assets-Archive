// https://www.redditstatic.com/desktop2x/reddit-components-Settings-CreatePasswordSSOModal.3fc6e6dac030385fb19e.js
// Retrieved at 9/15/2021, 5:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Settings-CreatePasswordSSOModal"], {
		"./src/reddit/components/EmailCollection/Envelope/index.m.less": function(e, s, t) {
			e.exports = {
				container: "_1yYBGklEZ27AA6Pk4a5xcB",
				content: "_1tsHXJq8O99kY-Hnw0TU9H",
				envelopeIcon: "_2MwJgJPAzuZmaOVwlLfjeO",
				warningIcon: "_1UqQ04HyR3qGPylb_9baOq"
			}
		},
		"./src/reddit/components/EmailCollection/Envelope/index.tsx": function(e, s, t) {
			"use strict";
			var o = t("./node_modules/react/index.js"),
				a = t.n(o),
				n = t("./src/lib/classNames/index.ts"),
				l = t("./src/reddit/icons/svgs/Envelope/index.tsx"),
				r = t("./src/reddit/icons/svgs/Warning/index.tsx"),
				i = t("./src/reddit/components/EmailCollection/Envelope/index.m.less"),
				c = t.n(i);
			s.a = e => a.a.createElement("div", {
				className: Object(n.a)(c.a.container, e.className)
			}, a.a.createElement("div", {
				className: c.a.content
			}, a.a.createElement(l.a, {
				className: c.a.envelopeIcon
			}), a.a.createElement(r.a, {
				className: Object(n.a)(c.a.warningIcon, e.warningClassName)
			})))
		},
		"./src/reddit/components/Settings/CreatePasswordSSOModal/Modals.m.less": function(e, s, t) {
			e.exports = {
				ResponsiveOverlay: "_2PEtDCLPisBC_LKAJBDC_a",
				responsiveOverlay: "_2PEtDCLPisBC_LKAJBDC_a"
			}
		},
		"./src/reddit/components/Settings/CreatePasswordSSOModal/index.m.less": function(e, s, t) {
			e.exports = {
				buttonWrapper: "pD9WAqj9jQhBX4jo2qPbW",
				primaryBtn: "_2nbzAE6WpO_TxWtzx-VgKd",
				description: "_27tUxTtZvDc5p24lBmCh_H",
				mResponsive: "_3UJ46PtcG8gifVWWbuE2bc"
			}
		},
		"./src/reddit/components/Settings/CreatePasswordSSOModal/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var o = t("./node_modules/react/index.js"),
				a = t.n(o),
				n = t("./node_modules/react-redux/es/index.js"),
				l = t("./node_modules/reselect/es/index.js"),
				r = t("./src/reddit/actions/modal.ts"),
				i = t("./src/reddit/actions/users.ts"),
				c = t("./node_modules/fbt/lib/FbtPublic.js"),
				d = t("./src/higherOrderComponents/asModal/index.tsx"),
				m = t("./src/lib/classNames/index.ts"),
				p = t("./src/reddit/components/EmailCollection/Envelope/index.tsx"),
				u = t("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				v = t("./src/reddit/controls/Button/index.tsx"),
				w = t("./src/reddit/components/Settings/CreatePasswordSSOModal/index.m.less"),
				b = t.n(w);
			const h = ({
				isResponsiveSettingsEnabled: e
			}) => e ? b.a.mResponsive : "";
			var g = e => a.a.createElement(u.a, {
					className: h(e),
					icon: a.a.createElement(p.a, null),
					description: c.fbt._("We sent a message to {email} with a link to create your password.", [c.fbt._param("email", e.userEmail || "")], {
						hk: "2YDohi"
					}),
					onClose: e.isResponsiveSettingsEnabled ? void 0 : e.onClose,
					title: c.fbt._("Check your email", null, {
						hk: "1gDhgD"
					})
				}, a.a.createElement("div", {
					className: b.a.buttonWrapper
				}, a.a.createElement(v.k, {
					className: Object(m.a)(b.a.commonBtn, b.a.primaryBtn),
					onClick: e.onClose,
					redditStyle: !0
				}, c.fbt._("Ok", null, {
					hk: "wn6jy"
				})))),
				C = t("./src/reddit/helpers/trackers/sso.ts"),
				E = t("./src/reddit/hooks/useTracking.ts");
			const O = ({
				isResponsiveSettingsEnabled: e
			}) => e ? b.a.mResponsive : "";
			var k, y = e => {
				const s = Object(E.a)();
				Object(o.useEffect)(() => {
					s(C.e)
				}, [s]);
				return a.a.createElement(u.a, {
					className: O(e),
					icon: a.a.createElement(p.a, null),
					description: e.description,
					onClose: e.isResponsiveSettingsEnabled ? void 0 : e.onClose,
					title: e.title
				}, a.a.createElement("div", {
					className: b.a.buttonWrapper
				}, a.a.createElement(v.n, {
					onClick: () => {
						s(Object(C.b)("cancel")), e.onClose()
					},
					redditStyle: !0
				}, c.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), a.a.createElement(v.k, {
					className: Object(m.a)(b.a.commonBtn, b.a.primaryBtn),
					onClick: () => {
						s(Object(C.b)("continue")), e.handleContinueClick()
					},
					redditStyle: !0
				}, c.fbt._("Continue", null, {
					hk: "2U1GLB"
				}))))
			};
			! function(e) {
				e[e.Prompt = 0] = "Prompt", e[e.Confirmation = 1] = "Confirmation"
			}(k || (k = {}));
			class _ extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						step: k.Prompt
					}, this.handleContinueClick = () => {
						this.sendResetPasswordEmail(), this.setState({
							step: k.Confirmation
						})
					}, this.sendResetPasswordEmail = () => {
						this.props.userEmail && this.props.username && this.props.sendResetEmail({
							curEmail: this.props.userEmail,
							name: this.props.username
						})
					}
				}
				render() {
					const {
						isResponsiveSettingsEnabled: e,
						onClose: s
					} = this.props;
					return this.state.step === k.Prompt ? a.a.createElement(y, {
						description: this.props.description,
						handleContinueClick: this.handleContinueClick,
						isResponsiveSettingsEnabled: e,
						onClose: s,
						title: this.props.title
					}) : a.a.createElement(g, {
						isResponsiveSettingsEnabled: e,
						onClose: s,
						userEmail: this.props.userEmail
					})
				}
			}
			var x = Object(d.a)(_),
				f = t("./src/reddit/components/Settings/CreatePasswordSSOModal/Modals.m.less"),
				P = t.n(f);

			function j() {
				return (j = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
					}
					return e
				}).apply(this, arguments)
			}
			const M = ({
				isResponsiveSettingsEnabled: e
			}) => e ? P.a.ResponsiveOverlay : "";
			var R = e => a.a.createElement(o.Fragment, null, e.resetPasswordFor2FAModalOpen && a.a.createElement(x, j({
					description: c.fbt._("To use two-factor authentication, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "440ryb"
					}),
					title: c.fbt._("Use two-factor authentication", null, {
						hk: "4D76xa"
					}),
					onClose: e.closeResetPasswordFor2FAModal,
					onOverlayClick: e.closeResetPasswordFor2FAModal,
					overlayClassName: M(e),
					withOverlay: !0
				}, e)), e.resetPasswordForEmailModalOpen && a.a.createElement(x, j({
					description: c.fbt._("To change your email address, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "2cstEg"
					}),
					title: c.fbt._("Change your email address", null, {
						hk: "3GlFK"
					}),
					onClose: e.closeResetPasswordForEmailModal,
					onOverlayClick: e.closeResetPasswordForEmailModal,
					overlayClassName: M(e),
					withOverlay: !0
				}, e)), e.resetPasswordForAppleLinkModalOpen && a.a.createElement(x, j({
					description: c.fbt._("To connect your Apple ID, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "2agOta"
					}),
					title: c.fbt._("Connect your Apple ID", null, {
						hk: "Cg7l9"
					}),
					onClose: e.closeResetPasswordForAppleLinkModal,
					onOverlayClick: e.closeResetPasswordForAppleLinkModal,
					overlayClassName: M(e),
					withOverlay: !0
				}, e)), e.resetPasswordForAppleUnlinkModalOpen && a.a.createElement(x, j({
					description: c.fbt._("To disconnect your Apple ID, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "47P4uJ"
					}),
					title: c.fbt._("Disconnect from Apple", null, {
						hk: "1UpB3j"
					}),
					onClose: e.closeResetPasswordForAppleUnlinkModal,
					onOverlayClick: e.closeResetPasswordForAppleUnlinkModal,
					overlayClassName: M(e),
					withOverlay: !0
				}, e)), e.resetPasswordForGoogleLinkModalOpen && a.a.createElement(x, j({
					description: c.fbt._("To connect your Google account, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "4xWcaj"
					}),
					title: c.fbt._("Connect your Google Account", null, {
						hk: "3JniU1"
					}),
					onClose: e.closeResetPasswordForGoogleLinkModal,
					onOverlayClick: e.closeResetPasswordForGoogleLinkModal,
					overlayClassName: M(e),
					withOverlay: !0
				}, e)), e.resetPasswordForGoogleUnlinkModalOpen && a.a.createElement(x, j({
					description: c.fbt._("To disconnect your Google account, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "2MyWqh"
					}),
					title: c.fbt._("Disconnect from Google", null, {
						hk: "2sw2TE"
					}),
					onClose: e.closeResetPasswordForGoogleUnlinkModal,
					onOverlayClick: e.closeResetPasswordForGoogleUnlinkModal,
					overlayClassName: M(e),
					withOverlay: !0
				}, e)), e.resetPasswordForDeactivateAccountModalOpen && a.a.createElement(x, j({
					description: c.fbt._("To deactivate your Reddit account, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "C7fCQ"
					}),
					title: c.fbt._("Deactivate account", null, {
						hk: "VyFq"
					}),
					onClose: e.closeResetPasswordForDeactivateAccountModal,
					onOverlayClick: e.closeResetPasswordForDeactivateAccountModal,
					overlayClassName: M(e),
					withOverlay: !0
				}, e))),
				A = t("./src/reddit/components/Settings/modalIds.ts"),
				F = t("./src/reddit/models/User/index.ts"),
				N = t("./src/reddit/selectors/activeModalId.ts"),
				S = t("./src/reddit/selectors/user.ts");
			const D = Object(l.c)({
					resetPasswordFor2FAModalOpen: Object(N.b)(A.h),
					resetPasswordForEmailModalOpen: Object(N.b)(A.l),
					resetPasswordForAppleLinkModalOpen: Object(N.b)(A.i),
					resetPasswordForAppleUnlinkModalOpen: Object(N.b)(A.j),
					resetPasswordForDeactivateAccountModalOpen: Object(N.b)(A.k),
					resetPasswordForGoogleLinkModalOpen: Object(N.b)(A.m),
					resetPasswordForGoogleUnlinkModalOpen: Object(N.b)(A.n),
					userEmail: S.n,
					username: e => {
						const s = Object(S.k)(e);
						return s && Object(F.e)(s) || ""
					}
				}),
				L = Object(n.b)(D, e => ({
					closeResetPasswordFor2FAModal: () => e(Object(r.g)(A.h)),
					closeResetPasswordForEmailModal: () => e(Object(r.g)(A.l)),
					closeResetPasswordForAppleLinkModal: () => e(Object(r.g)(A.i)),
					closeResetPasswordForAppleUnlinkModal: () => e(Object(r.g)(A.j)),
					closeResetPasswordForDeactivateAccountModal: () => e(Object(r.g)(A.k)),
					closeResetPasswordForGoogleLinkModal: () => e(Object(r.g)(A.m)),
					closeResetPasswordForGoogleUnlinkModal: () => e(Object(r.g)(A.n)),
					sendResetEmail: s => e(Object(i.x)(s))
				}));
			s.default = L(e => e.userEmail && e.username ? a.a.createElement(R, e) : null)
		},
		"./src/reddit/components/Settings/ModalContainer/index.m.less": function(e, s, t) {
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
		"./src/reddit/components/Settings/ModalContainer/index.tsx": function(e, s, t) {
			"use strict";
			var o = t("./node_modules/react/index.js"),
				a = t.n(o),
				n = t("./src/lib/classNames/index.ts"),
				l = t("./src/reddit/icons/svgs/Close/index.tsx"),
				r = t("./src/reddit/components/Settings/ModalContainer/index.m.less"),
				i = t.n(r);
			s.a = e => {
				const {
					bodyClassName: s,
					children: t,
					className: o,
					description: r,
					descriptionClassName: c,
					headerClassName: d,
					icon: m,
					iconClassName: p,
					onClose: u,
					title: v
				} = e;
				return a.a.createElement("div", {
					className: Object(n.a)(i.a.container, o)
				}, u && a.a.createElement("button", {
					className: i.a.closeButton,
					onClick: u
				}, a.a.createElement(l.a, {
					className: i.a.closeIcon
				})), a.a.createElement("div", {
					className: Object(n.a)(i.a.header, d)
				}, m && a.a.createElement("div", {
					className: Object(n.a)(i.a.icon, p)
				}, m), a.a.createElement("h2", {
					className: i.a.title
				}, v)), r && a.a.createElement("p", {
					className: Object(n.a)(i.a.description, c)
				}, r), a.a.createElement("div", {
					className: Object(n.a)(i.a.body, s)
				}, t))
			}
		},
		"./src/reddit/icons/svgs/Envelope/index.tsx": function(e, s, t) {
			"use strict";
			var o = t("./node_modules/react/index.js"),
				a = t.n(o);
			s.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"
			}), a.a.createElement("path", {
				d: "M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z"
			}))
		},
		"./src/reddit/icons/svgs/Warning/index.m.less": function(e, s, t) {
			e.exports = {
				warning: "_3ppQRTaxPs0X9rsFYHfSdf"
			}
		},
		"./src/reddit/icons/svgs/Warning/index.tsx": function(e, s, t) {
			"use strict";
			var o = t("./node_modules/react/index.js"),
				a = t.n(o),
				n = t("./src/lib/classNames/index.ts"),
				l = t("./src/reddit/icons/svgs/Warning/index.m.less"),
				r = t.n(l);
			s.a = e => a.a.createElement("svg", {
				className: Object(n.a)(r.a.warning, e.className),
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("circle", {
				r: "9",
				cx: "9",
				cy: "9"
			}), a.a.createElement("path", {
				d: "m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-1 -1)"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Settings-CreatePasswordSSOModal.3fc6e6dac030385fb19e.js.map