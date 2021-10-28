// https://www.redditstatic.com/desktop2x/reddit-components-Settings-CreatePasswordSSOModal.abc4771073c6ac9fca1d.js
// Retrieved at 10/28/2021, 5:10:10 PM by Reddit Dataminer v1.0.0
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
				a = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/icons/svgs/Envelope/index.tsx"),
				r = s("./src/reddit/icons/svgs/Warning/index.tsx"),
				i = s("./src/reddit/components/EmailCollection/Envelope/index.m.less"),
				c = s.n(i);
			t.a = e => a.a.createElement("div", {
				className: Object(n.a)(c.a.container, e.className)
			}, a.a.createElement("div", {
				className: c.a.content
			}, a.a.createElement(l.a, {
				className: c.a.envelopeIcon
			}), a.a.createElement(r.a, {
				className: Object(n.a)(c.a.warningIcon, e.warningClassName)
			})))
		},
		"./src/reddit/components/Settings/CreatePasswordSSOModal/Modals.m.less": function(e, t, s) {
			e.exports = {
				ResponsiveOverlay: "_2PEtDCLPisBC_LKAJBDC_a",
				responsiveOverlay: "_2PEtDCLPisBC_LKAJBDC_a"
			}
		},
		"./src/reddit/components/Settings/CreatePasswordSSOModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWrapper: "pD9WAqj9jQhBX4jo2qPbW",
				primaryBtn: "_2nbzAE6WpO_TxWtzx-VgKd",
				description: "_27tUxTtZvDc5p24lBmCh_H",
				mResponsive: "_3UJ46PtcG8gifVWWbuE2bc"
			}
		},
		"./src/reddit/components/Settings/CreatePasswordSSOModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				a = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/users.ts"),
				c = s("./node_modules/fbt/lib/FbtPublic.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/components/EmailCollection/Envelope/index.tsx"),
				u = s("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/components/Settings/CreatePasswordSSOModal/index.m.less"),
				h = s.n(C);
			const O = ({
				isResponsiveSettingsEnabled: e
			}) => e ? h.a.mResponsive : "";
			var w = e => a.a.createElement(u.a, {
					className: O(e),
					icon: a.a.createElement(p.a, null),
					description: c.fbt._("We sent a message to {email} with a link to create your password.", [c.fbt._param("email", e.userEmail || "")], {
						hk: "2YDohi"
					}),
					onClose: e.isResponsiveSettingsEnabled ? void 0 : e.onClose,
					title: c.fbt._("Check your email", null, {
						hk: "1gDhgD"
					})
				}, a.a.createElement("div", {
					className: h.a.buttonWrapper
				}, a.a.createElement(b.k, {
					className: Object(m.a)(h.a.commonBtn, h.a.primaryBtn),
					onClick: e.onClose,
					redditStyle: !0
				}, c.fbt._("Ok", null, {
					hk: "wn6jy"
				})))),
				v = s("./src/reddit/helpers/trackers/sso.ts"),
				E = s("./src/reddit/hooks/useTracking.ts");
			const k = ({
				isResponsiveSettingsEnabled: e
			}) => e ? h.a.mResponsive : "";
			var g, y = e => {
				const t = Object(E.a)();
				Object(o.useEffect)(() => {
					t(v.e)
				}, [t]);
				return a.a.createElement(u.a, {
					className: k(e),
					icon: a.a.createElement(p.a, null),
					description: e.description,
					onClose: e.isResponsiveSettingsEnabled ? void 0 : e.onClose,
					title: e.title
				}, a.a.createElement("div", {
					className: h.a.buttonWrapper
				}, a.a.createElement(b.n, {
					onClick: () => {
						t(Object(v.b)("cancel")), e.onClose()
					},
					redditStyle: !0
				}, c.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), a.a.createElement(b.k, {
					className: Object(m.a)(h.a.commonBtn, h.a.primaryBtn),
					onClick: () => {
						t(Object(v.b)("continue")), e.handleContinueClick()
					},
					redditStyle: !0
				}, c.fbt._("Continue", null, {
					hk: "2U1GLB"
				}))))
			};
			! function(e) {
				e[e.Prompt = 0] = "Prompt", e[e.Confirmation = 1] = "Confirmation"
			}(g || (g = {}));
			class _ extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						step: g.Prompt
					}, this.handleContinueClick = () => {
						this.sendResetPasswordEmail(), this.setState({
							step: g.Confirmation
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
						onClose: t
					} = this.props;
					return this.state.step === g.Prompt ? a.a.createElement(y, {
						description: this.props.description,
						handleContinueClick: this.handleContinueClick,
						isResponsiveSettingsEnabled: e,
						onClose: t,
						title: this.props.title
					}) : a.a.createElement(w, {
						isResponsiveSettingsEnabled: e,
						onClose: t,
						userEmail: this.props.userEmail
					})
				}
			}
			var P = Object(d.a)(_),
				f = s("./src/reddit/components/Settings/CreatePasswordSSOModal/Modals.m.less"),
				j = s.n(f);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const x = ({
				isResponsiveSettingsEnabled: e
			}) => e ? j.a.ResponsiveOverlay : "";
			var R = e => a.a.createElement(o.Fragment, null, e.resetPasswordFor2FAModalOpen && a.a.createElement(P, M({
					description: c.fbt._("To use two-factor authentication, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "440ryb"
					}),
					title: c.fbt._("Use two-factor authentication", null, {
						hk: "4D76xa"
					}),
					onClose: e.closeResetPasswordFor2FAModal,
					onOverlayClick: e.closeResetPasswordFor2FAModal,
					overlayClassName: x(e),
					withOverlay: !0
				}, e)), e.resetPasswordForEmailModalOpen && a.a.createElement(P, M({
					description: c.fbt._("To change your email address, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "2cstEg"
					}),
					title: c.fbt._("Change your email address", null, {
						hk: "3GlFK"
					}),
					onClose: e.closeResetPasswordForEmailModal,
					onOverlayClick: e.closeResetPasswordForEmailModal,
					overlayClassName: x(e),
					withOverlay: !0
				}, e)), e.resetPasswordForAppleLinkModalOpen && a.a.createElement(P, M({
					description: c.fbt._("To connect your Apple ID, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "2agOta"
					}),
					title: c.fbt._("Connect your Apple ID", null, {
						hk: "Cg7l9"
					}),
					onClose: e.closeResetPasswordForAppleLinkModal,
					onOverlayClick: e.closeResetPasswordForAppleLinkModal,
					overlayClassName: x(e),
					withOverlay: !0
				}, e)), e.resetPasswordForAppleUnlinkModalOpen && a.a.createElement(P, M({
					description: c.fbt._("To disconnect your Apple ID, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "47P4uJ"
					}),
					title: c.fbt._("Disconnect from Apple", null, {
						hk: "1UpB3j"
					}),
					onClose: e.closeResetPasswordForAppleUnlinkModal,
					onOverlayClick: e.closeResetPasswordForAppleUnlinkModal,
					overlayClassName: x(e),
					withOverlay: !0
				}, e)), e.resetPasswordForGoogleLinkModalOpen && a.a.createElement(P, M({
					description: c.fbt._("To connect your Google account, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "4xWcaj"
					}),
					title: c.fbt._("Connect your Google Account", null, {
						hk: "3JniU1"
					}),
					onClose: e.closeResetPasswordForGoogleLinkModal,
					onOverlayClick: e.closeResetPasswordForGoogleLinkModal,
					overlayClassName: x(e),
					withOverlay: !0
				}, e)), e.resetPasswordForGoogleUnlinkModalOpen && a.a.createElement(P, M({
					description: c.fbt._("To disconnect your Google account, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "2MyWqh"
					}),
					title: c.fbt._("Disconnect from Google", null, {
						hk: "2sw2TE"
					}),
					onClose: e.closeResetPasswordForGoogleUnlinkModal,
					onOverlayClick: e.closeResetPasswordForGoogleUnlinkModal,
					overlayClassName: x(e),
					withOverlay: !0
				}, e)), e.resetPasswordForDeactivateAccountModalOpen && a.a.createElement(P, M({
					description: c.fbt._("To deactivate your Reddit account, you need to create a Reddit password first. We'll walk you through it.", null, {
						hk: "C7fCQ"
					}),
					title: c.fbt._("Deactivate account", null, {
						hk: "VyFq"
					}),
					onClose: e.closeResetPasswordForDeactivateAccountModal,
					onOverlayClick: e.closeResetPasswordForDeactivateAccountModal,
					overlayClassName: x(e),
					withOverlay: !0
				}, e))),
				F = s("./src/reddit/components/Settings/modalIds.ts"),
				A = s("./src/reddit/models/User/index.ts"),
				N = s("./src/reddit/selectors/activeModalId.ts"),
				S = s("./src/reddit/selectors/user.ts");
			const D = Object(l.c)({
					resetPasswordFor2FAModalOpen: Object(N.b)(F.h),
					resetPasswordForEmailModalOpen: Object(N.b)(F.l),
					resetPasswordForAppleLinkModalOpen: Object(N.b)(F.i),
					resetPasswordForAppleUnlinkModalOpen: Object(N.b)(F.j),
					resetPasswordForDeactivateAccountModalOpen: Object(N.b)(F.k),
					resetPasswordForGoogleLinkModalOpen: Object(N.b)(F.m),
					resetPasswordForGoogleUnlinkModalOpen: Object(N.b)(F.n),
					userEmail: S.n,
					username: e => {
						const t = Object(S.k)(e);
						return t && Object(A.e)(t) || ""
					}
				}),
				L = Object(n.b)(D, e => ({
					closeResetPasswordFor2FAModal: () => e(Object(r.g)(F.h)),
					closeResetPasswordForEmailModal: () => e(Object(r.g)(F.l)),
					closeResetPasswordForAppleLinkModal: () => e(Object(r.g)(F.i)),
					closeResetPasswordForAppleUnlinkModal: () => e(Object(r.g)(F.j)),
					closeResetPasswordForDeactivateAccountModal: () => e(Object(r.g)(F.k)),
					closeResetPasswordForGoogleLinkModal: () => e(Object(r.g)(F.m)),
					closeResetPasswordForGoogleUnlinkModal: () => e(Object(r.g)(F.n)),
					sendResetEmail: t => e(Object(i.y)(t))
				}));
			t.default = L(e => e.userEmail && e.username ? a.a.createElement(R, e) : null)
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
				a = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/icons/svgs/Close/index.tsx"),
				r = s("./src/reddit/components/Settings/ModalContainer/index.m.less"),
				i = s.n(r);
			t.a = e => {
				const {
					bodyClassName: t,
					children: s,
					className: o,
					description: r,
					descriptionClassName: c,
					headerClassName: d,
					icon: m,
					iconClassName: p,
					onClose: u,
					title: b
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
				}, b)), r && a.a.createElement("p", {
					className: Object(n.a)(i.a.description, c)
				}, r), a.a.createElement("div", {
					className: Object(n.a)(i.a.body, t)
				}, s))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Settings-CreatePasswordSSOModal.abc4771073c6ac9fca1d.js.map