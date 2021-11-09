// https://www.redditstatic.com/desktop2x/PremiumFeedbackModal.b09ba5ccdc4481309a77.js
// Retrieved at 11/9/2021, 12:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PremiumFeedbackModal"], {
		"./src/reddit/components/Settings/PremiumCancellation/PremiumFeedbackModal.m.less": function(e, t, n) {
			e.exports = {
				modal: "lM4Gvey9FsQB6W4s9_8gs",
				header: "A7gis5OmUqJwyd0vmW6Kh",
				contentWrapper: "_3q17TTjOgK_xiUL0m92iFp",
				radioInput: "_1pJDG9VMHlUX12tViYxs-A",
				radioOption: "_3grSMdwLg3zDiHZjWY3pWD",
				buttonsRow: "_1i7Qbc2dNsi9_DKQMwF03I",
				button: "_1GEx9gYWD8quLIJqkSCVJ-"
			}
		},
		"./src/reddit/components/Settings/PremiumCancellation/PremiumFeedbackModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/index.tsx"),
				c = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				m = n("./src/reddit/components/Settings/PremiumCancellation/PremiumFeedbackModal.m.less"),
				u = n.n(m);
			const p = [{
				key: "ad-free",
				description: a.fbt._("Ad-free browsing wasn't that awesome", null, {
					hk: "1mE8KP"
				})
			}, {
				key: "avatar-gear",
				description: a.fbt._("Avatar gear went unused", null, {
					hk: "e5VnW"
				})
			}, {
				key: "monthly-coins",
				description: a.fbt._("700 monthly coins weren't enough", null, {
					hk: "1ZjGoq"
				})
			}, {
				key: "members-lounge",
				description: a.fbt._("I didn't use the Members lounge", null, {
					hk: "3UgDM"
				})
			}];
			t.default = Object(r.a)(({
				closeModal: e
			}) => {
				const [t, n] = Object(o.useState)(void 0), r = a.fbt._("We're sad to see you go", null, {
					hk: "150JTN"
				}), m = a.fbt._("In order to create the best experience we need your help. Please share your feedback so we can improve.", null, {
					hk: "3YLMdC"
				});
				return s.a.createElement("div", {
					className: u.a.modal
				}, s.a.createElement("div", {
					className: u.a.header
				}, r, s.a.createElement(i.a, {
					onClick: e
				})), s.a.createElement("div", {
					className: u.a.contentWrapper
				}, m, s.a.createElement(l.a, {
					value: t,
					name: "feedback-option",
					onChange: n,
					className: u.a.radioInput
				}, p.map(e => s.a.createElement(c.a, {
					className: u.a.radioOption,
					showButton: !0,
					value: e.key,
					key: e.key
				}, e.description)))), s.a.createElement("div", {
					className: u.a.buttonsRow
				}, s.a.createElement(d.t, {
					className: u.a.button,
					priority: d.c.Secondary,
					disabled: !t,
					onClick: () => {
						console.log("GOLDENG-11200", t), e()
					}
				}, a.fbt._("DOWNGRADE TO FREE", null, {
					hk: "QHOi9"
				})), s.a.createElement(d.t, {
					className: u.a.button,
					priority: d.c.Primary,
					onClick: e
				}, a.fbt._("I DON'T WANT TO DOWNGRADE", null, {
					hk: "2fwOR9"
				}))))
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumFeedbackModal.b09ba5ccdc4481309a77.js.map