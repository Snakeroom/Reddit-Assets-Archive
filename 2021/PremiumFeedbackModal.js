// https://www.redditstatic.com/desktop2x/PremiumFeedbackModal.9aae7e681d6094141bb1.js
// Retrieved at 11/11/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/gold/productOffers.ts"),
				c = n("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/controls/RadioInput/index.tsx"),
				p = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				b = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				h = n("./src/reddit/hooks/useThunkDispatch.ts"),
				k = n("./src/reddit/selectors/gold/productOffers.ts"),
				_ = n("./src/reddit/components/Settings/PremiumCancellation/PremiumFeedbackModal.m.less"),
				g = n.n(_);
			const f = [{
				key: "ad-free",
				description: s.fbt._("Ad-free browsing wasn't that awesome", null, {
					hk: "1mE8KP"
				})
			}, {
				key: "avatar-gear",
				description: s.fbt._("Avatar gear went unused", null, {
					hk: "e5VnW"
				})
			}, {
				key: "monthly-coins",
				description: s.fbt._("700 monthly coins weren't enough", null, {
					hk: "1ZjGoq"
				})
			}, {
				key: "members-lounge",
				description: s.fbt._("I didn't use the Members lounge", null, {
					hk: "3UgDM"
				})
			}, {
				key: "other",
				description: s.fbt._("Other", null, {
					hk: "4wkKh3"
				})
			}];
			t.default = Object(r.a)(({
				closeModal: e
			}) => {
				const t = Object(h.a)(),
					n = Object(l.b)(),
					[r, _] = Object(o.useState)(void 0),
					O = Object(d.e)(k.g),
					x = s.fbt._("We're sad to see you go", null, {
						hk: "150JTN"
					}),
					y = s.fbt._("In order to create the best experience we need your help. Please share your feedback so we can improve.", null, {
						hk: "3YLMdC"
					});
				return a.a.createElement("div", {
					className: g.a.modal
				}, a.a.createElement("div", {
					className: g.a.header
				}, x, a.a.createElement(c.a, {
					onClick: e
				})), a.a.createElement("div", {
					className: g.a.contentWrapper
				}, y, a.a.createElement(m.a, {
					value: r,
					name: "feedback-option",
					onChange: _,
					className: g.a.radioInput
				}, f.map(e => a.a.createElement(p.a, {
					className: g.a.radioOption,
					showButton: !0,
					value: e.key,
					key: e.key
				}, e.description)))), a.a.createElement("div", {
					className: g.a.buttonsRow
				}, a.a.createElement(u.t, {
					className: g.a.button,
					priority: u.c.Secondary,
					onClick: e
				}, s.fbt._("DISMISS", null, {
					hk: "3nRNXW"
				})), a.a.createElement(u.t, {
					className: g.a.button,
					priority: u.c.Primary,
					disabled: !r,
					onClick: () => {
						n(Object(b.c)()), console.log("GOLDENG-11371: Send data with telemetry", r), (async () => {
							const n = null == O ? void 0 : O.id;
							if (n) {
								await t(Object(i.a)(n)) && e()
							}
						})()
					}
				}, s.fbt._("CANCEL MY SUBSCRIPTION", null, {
					hk: "1U3O5g"
				}))))
			})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react-redux/es/index.js");

			function o() {
				return Object(s.d)()
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumFeedbackModal.9aae7e681d6094141bb1.js.map