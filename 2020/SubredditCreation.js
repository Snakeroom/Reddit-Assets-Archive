// https://www.redditstatic.com/desktop2x/SubredditCreation.46d29ae85c1e41cb3481.js
// Retrieved at 5/14/2020, 3:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditCreation"], {
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, a) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = a("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = a("./src/reddit/layout/row/Inline/index.tsx"),
				c = a("./src/reddit/controls/CheckboxInput/index.m.less"),
				d = a.n(c);
			t.a = e => n.a.createElement(l.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(i.a)(e.className, d.a.checkboxInput, e.disabled ? d.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, n.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? n.a.createElement(o.a, {
				className: d.a.checkboxSelected
			}) : n.a.createElement(r.a, null), e.children)
		},
		"./src/reddit/i18n/components.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);

			function i(e) {
				return n.a.createElement(n.a.Fragment, null, e.children)
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, a) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/svgs/Admin/index.m.less"),
				o = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: Object(i.a)(e.className, o.a.admin, {
					[o.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);

			function i(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/pages/SubredditCreation/Layout/index.m.less": function(e, t, a) {
			e.exports = {
				Sidebar: "_21QIcELhFLJ4T6uOUKqej7",
				sidebar: "_21QIcELhFLJ4T6uOUKqej7",
				isOverlay: "_3JejK3woZKuE7psWYzZMk-",
				Content: "_2wEvMk0HNO1vMRXR89R4YE",
				content: "_2wEvMk0HNO1vMRXR89R4YE",
				Container: "_3rOOumzhn2kQeSbQA1BtJI",
				container: "_3rOOumzhn2kQeSbQA1BtJI",
				OuterContainer: "_1t_20Pp0ozZf5JHADFW277",
				outerContainer: "_1t_20Pp0ozZf5JHADFW277"
			}
		},
		"./src/reddit/pages/SubredditCreation/index.m.less": function(e, t, a) {
			e.exports = {
				sublabel: "_3iEQMbJzyCJP7q0YQLg6j4",
				subtitle: "_1NkQ5U2m0s_6vOfhCgiIgT",
				radioDescription: "_2VfO_j9K0NqNwA6JyAl8Dk",
				buttonContainer: "rktXqe6ilbY86M7UI5N0",
				isOverlay: "_2-RGOjReVDKqocc0lhfKCD",
				field: "lzEa7-AzGmC9abTt7-RJG",
				isCreatePending: "_3rxpxb7pMWAbGQ6_JA_my7",
				subredditCreation: "_3eSVsnKJOqAQo-ixxTeJcl",
				container: "_2oaybRT7snUp8XlyHlRiSP",
				title: "_19pYcIVThkZW5KMHTi8qsc",
				nsfw: "_hnZsl3c6qOjy4qOD9r0R",
				createButton: "rJOmFCS_DMZSRltlKtpyt",
				pendingText: "oXus6jwjzhkeznWdE45YL",
				metaFieldDescription: "fd5WCBCH7kTLTlNepW054",
				numCommunityTopicsSelected: "_1QES7ND3zudXR2epk08OVa",
				subtextContainer: "_1V23LtWm6tqb0xlD1Xkh-W",
				radioContainer: "_3qUROz4qvkxCG-oEJTkW3x",
				radioContent: "luCqkz2vQaP-L_NeDD98b",
				fullWidthTextContainer: "_2jvToia6nJCdTHqp_Tw_fp",
				Info: "cP738yi9DxlBmCQTtFLop",
				info: "cP738yi9DxlBmCQTtFLop",
				RadioOption: "_2uqw2bfrk5pQeRVMtPVRUR",
				radioOption: "_2uqw2bfrk5pQeRVMtPVRUR",
				StyledTooltip: "_3mMji3dmYN3jsQ2Ri0owBm",
				styledTooltip: "_3mMji3dmYN3jsQ2Ri0owBm",
				Public: "_3fiOvK-VXqZ9cZO0d912xA",
				public: "_3fiOvK-VXqZ9cZO0d912xA",
				RadioIcon: "_1vr9rsoGcISz-S6s7p_6s-",
				radioIcon: "_1vr9rsoGcISz-S6s7p_6s-",
				Restricted: "_3RYKKCLydFkeZVJov0xebO",
				restricted: "_3RYKKCLydFkeZVJov0xebO",
				Private: "_19fLjAFVy42ZR2vocDvgUW",
				private: "_19fLjAFVy42ZR2vocDvgUW",
				Employee: "ExNY0v88NVrkWCfrt55XJ",
				employee: "ExNY0v88NVrkWCfrt55XJ",
				CloseButton: "_1I-ULJ_Pqw5ZwVbFuh5I6W",
				closeButton: "_1I-ULJ_Pqw5ZwVbFuh5I6W",
				ErrorText: "_2ay6MX8oi5mY0chgCSBVHO",
				errorText: "_2ay6MX8oi5mY0chgCSBVHO"
			}
		},
		"./src/reddit/pages/SubredditCreation/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "radioOptions", (function() {
				return he
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				i = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/react-router-redux/es/index.js"),
				l = a("./node_modules/reselect/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				d = a("./src/lib/formatApiError/index.ts"),
				m = a("./src/reddit/actions/subredditCreation.ts"),
				u = a("./src/reddit/actions/tooltip.ts"),
				p = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./src/reddit/actions/tags/index.ts")),
				h = a("./src/reddit/actions/toaster.ts"),
				C = a("./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx"),
				b = a("./src/reddit/components/MultiOptionSelect/index.tsx"),
				x = a("./src/reddit/models/Tags/index.ts"),
				g = a("./src/reddit/models/Toast/index.ts"),
				v = a("./src/reddit/selectors/tags.ts"),
				E = a("./src/reddit/selectors/user.ts"),
				y = a("./src/reddit/components/CommunityTopics/index.m.less"),
				f = a.n(y);
			const _ = Object(l.c)({
				availableGlobalOptions: v.f,
				selectedOptions: v.k,
				isLoading: v.E,
				currentInput: v.g,
				language: E.Q,
				selectedPrimaryTag: v.y,
				hasSecondaryTags: v.q
			});
			class O extends i.a.Component {
				constructor() {
					super(...arguments), this.onOptionsChanged = e => {
						const t = e.filter(e => e.selected),
							a = e.filter(e => !e.selected);
						this.onOptionsSelected(t), a.forEach(e => this.onOptionDeselected(e))
					}
				}
				onOptionsSelected(e) {
					const t = x.a - this.props.selectedOptions.length,
						a = e.filter(e => !!e.displayText.trim()),
						s = a.slice(0, t);
					s.forEach(e => {
						this.props.optionSelected(Object.assign({}, e, {
							displayText: e.displayText.trim()
						}))
					}), s.length !== a.length && this.props.onMaxTopicsHit()
				}
				onOptionDeselected(e) {
					this.props.optionDeselected(Object.assign({}, e, {
						displayText: e.displayText.trim()
					}))
				}
				render() {
					return i.a.createElement("div", {
						className: f.a.communityTopicsContainer
					}, i.a.createElement(C.a, null), (!!this.props.selectedPrimaryTag || this.props.hasSecondaryTags) && i.a.createElement(b.a, {
						addText: s.fbt._("Add", null, {
							hk: "3xwE3E"
						}),
						allowFreeTextEntry: !0,
						availableOptions: this.props.availableGlobalOptions,
						dropdownHeaderText: s.fbt._("Suggested topics", null, {
							hk: "1qNrZC"
						}),
						input: this.props.currentInput,
						isError: this.props.selectedOptions.length > x.a,
						isLoading: this.props.isLoading,
						maxOptionLength: x.b,
						onSearchBarFocus: this.props.onSearchBarFocused,
						onInputChanged: e => {
							this.props.onInputChanged(e)
						},
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: this.props.selectedOptions,
						splitOnCommaPress: !0
					}))
				}
			}
			var k = Object(r.b)(_, e => ({
					optionSelected: t => {
						e(Object(p.c)({
							option: t
						}))
					},
					optionDeselected: t => {
						e(Object(p.b)({
							option: t
						}))
					},
					onInputChanged: t => e(Object(p.a)({
						input: t
					})),
					onSearchBarFocused: () => e((e, t) => {}),
					onMaxTopicsHit: () => e((e, t) => {
						e(Object(h.e)(Object.assign({}, Object(h.d)(s.fbt._("You can only add up to {max number of topics} community topics", [s.fbt._param("max number of topics", x.a.toString())], {
							hk: "1OySAh"
						}), g.b.Error), {
							duration: h.a
						})))
					})
				}))(O),
				T = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				w = a("./src/reddit/components/Settings/shared/Widgets.tsx"),
				N = a("./src/reddit/components/TrackingHelper/index.tsx"),
				j = a("./src/reddit/constants/history.ts"),
				S = a("./src/reddit/contexts/InsideOverlay.tsx"),
				L = a("./src/reddit/controls/Button/index.tsx"),
				D = a("./src/reddit/controls/CheckboxInput/index.tsx"),
				I = a("./src/reddit/controls/ErrorText/index.tsx"),
				M = a("./src/reddit/controls/RadioInput/index.tsx"),
				R = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				A = a("./src/reddit/helpers/trackers/screenview.ts"),
				P = a("./src/reddit/helpers/trackers/subredditCreation.ts"),
				B = a("./src/reddit/icons/svgs/Admin/index.tsx"),
				q = a("./src/reddit/icons/svgs/Close/index.tsx"),
				V = a("./src/reddit/icons/svgs/Eye/index.tsx"),
				F = a("./src/reddit/icons/svgs/Info/index.tsx"),
				J = a("./src/reddit/icons/svgs/Lock/index.tsx"),
				Z = a("./src/reddit/icons/svgs/User/index.tsx"),
				W = a("./src/reddit/models/Subreddit/index.ts"),
				Q = a("./src/reddit/models/SubredditRestrictions/index.ts"),
				K = a("./src/config.ts"),
				H = a("./src/reddit/pages/SubredditCreation/Layout/index.m.less"),
				Y = a.n(H);
			var z = e => i.a.createElement("div", {
					className: Y.a.OuterContainer
				}, i.a.createElement("div", {
					className: Object(c.a)(e.className, Y.a.Container, {
						[Y.a.isOverlay]: e.isOverlay
					})
				}, i.a.createElement("div", {
					className: Object(c.a)(Y.a.Sidebar, {
						[Y.a.isOverlay]: e.isOverlay
					}),
					style: {
						backgroundImage: "url(".concat(K.a.assetPath, "/img/").concat(e.isOverlay ? "community-creation" : "partner-connection", ".png)")
					}
				}), i.a.createElement("div", {
					className: Object(c.a)(Y.a.Content, {
						[Y.a.isOverlay]: e.isOverlay
					})
				}, e.children))),
				U = a("./src/reddit/selectors/subreddit.ts"),
				X = a("./src/reddit/pages/SubredditCreation/index.m.less"),
				G = a.n(X),
				$ = a("./src/lib/lessComponent.tsx");
			const ee = 21,
				te = 500,
				ae = "create-title-info",
				se = $.a.wrapped(F.a, "Info", G.a),
				ne = $.a.wrapped(R.a, "RadioOption", G.a),
				ie = $.a.wrapped(T.c, "Tooltip", G.a),
				re = $.a.wrapped(Z.a, "Public", G.a),
				oe = $.a.wrapped(V.a, "Restricted", G.a),
				le = $.a.wrapped(J.a, "Private", G.a),
				ce = $.a.wrapped(B.a, "Employee", G.a),
				de = $.a.wrapped(q.a, "CloseButton", G.a),
				me = $.a.wrapped(I.b, "ErrorText", G.a),
				ue = Object(l.c)({
					error: U.i,
					isCreatePending: U.l,
					isEmployee: E.E,
					language: E.Q,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(E.ab)(e),
					userIsSuspended: E.M,
					allTags: v.e,
					existingTags: v.h,
					newTags: v.i,
					selectedCommunityTopicsOptions: v.k,
					selectedPrimaryTagId: v.j
				}),
				pe = Object(r.b)(ue, e => ({
					createCommunity: t => e(Object(m.f)(t)),
					clearErrors: () => e(Object(m.e)()),
					onCloseLocation: t => e(Object(o.b)(t)),
					onShowTooltip: () => e(Object(u.f)({
						tooltipId: ae
					})),
					onHideTooltip: () => e(Object(u.i)())
				})),
				he = (e, t) => [i.a.createElement(ne, {
					key: "public",
					showButton: !0,
					value: "public"
				}, i.a.createElement("div", {
					className: G.a.radioContent
				}, i.a.createElement("div", null, i.a.createElement(re, null)), i.a.createElement("div", {
					className: G.a.radioContainer
				}, i.a.createElement("div", {
					className: G.a.sublabel
				}, s.fbt._("Public", null, {
					hk: "DK992"
				})), i.a.createElement("div", {
					className: Object(c.a)(G.a.metafieldDescription, G.a.radioDescription)
				}, s.fbt._("Anyone can view, post, and comment to this community", null, {
					hk: "1PfFUA"
				}))))), i.a.createElement(ne, {
					key: "restricted",
					showButton: !0,
					value: "restricted"
				}, i.a.createElement("div", {
					className: G.a.radioContent
				}, i.a.createElement("div", null, i.a.createElement(oe, null)), i.a.createElement("div", {
					className: G.a.radioContainer
				}, i.a.createElement("div", {
					className: G.a.sublabel
				}, s.fbt._("Restricted", null, {
					hk: "1iBTDq"
				})), i.a.createElement("div", {
					className: Object(c.a)(G.a.metafieldDescription, G.a.radioDescription)
				}, Object(Q.g)(t))))), i.a.createElement(ne, {
					key: "private",
					showButton: !0,
					value: "private"
				}, i.a.createElement("div", {
					className: G.a.radioContent
				}, i.a.createElement("div", null, i.a.createElement(le, null)), i.a.createElement("div", {
					className: G.a.radioContainer
				}, i.a.createElement("div", {
					className: G.a.sublabel
				}, s.fbt._("Private", null, {
					hk: "3q5SYn"
				})), i.a.createElement("div", {
					className: Object(c.a)(G.a.metafieldDescription, G.a.radioDescription)
				}, s.fbt._("Only approved users can view and submit to this community", null, {
					hk: "3z8OI6"
				}))))), i.a.createElement(ne, {
					key: "employees_only",
					showButton: !0,
					value: "employees_only",
					hidden: !e
				}, i.a.createElement("div", {
					className: G.a.radioContent
				}, i.a.createElement("div", null, i.a.createElement(ce, null)), i.a.createElement("div", {
					className: G.a.radioContainer
				}, i.a.createElement("div", {
					className: G.a.sublabel
				}, s.fbt._("Employees only", null, {
					hk: "1arrQC"
				})), i.a.createElement("div", {
					className: Object(c.a)(G.a.metafieldDescription, G.a.radioDescription)
				}, s.fbt._("Only Reddit employees can view and submit to this community", null, {
					hk: "3ty23C"
				})))))];
			class Ce extends i.a.Component {
				constructor(e) {
					super(e), this.onNameChange = e => {
						this.setState({
							name: e.target.value
						})
					}, this.onDescriptionChange = e => {
						this.setState({
							description: e.target.value
						})
					}, this.update = (e, t) => this.setState({
						[t]: e
					}), this.onTypeChange = e => {
						this.setState({
							type: e
						})
					}, this.onCreateCommunityClick = () => {
						this.props.isCreatePending || (clearTimeout(this.timeout), this.props.createCommunity({
							name: this.state.name,
							publicDescription: this.state.description,
							type: this.state.type,
							over18: this.state.over18,
							restrictCommenting: this.state.restrictCommenting,
							restrictPosting: this.state.restrictPosting,
							allTags: this.props.allTags,
							newTags: this.props.newTags,
							existingTags: this.props.existingTags,
							primaryTagId: this.props.selectedPrimaryTagId || void 0
						}), this.timeout = window.setTimeout(() => {
							this.props.isCreatePending && this.setState({
								waitingForSuccessfulCommunity: !0
							})
						}, 2e3))
					}, this.errorHelper = e => {
						if (!e) return {};
						const t = e.fields && e.fields.length && e.fields[0] && e.fields[0].field,
							a = e.type;
						if ("name" === t) {
							if ("NO_TEXT" === a) return {
								name: s.fbt._("A Community Name is required", null, {
									hk: "2ocQBg"
								})
							};
							if ("BAD_SR_NAME" === a) return {
								name: s.fbt._("Make sure your Community Name follows all of the formatting rules", null, {
									hk: "2pGksk"
								})
							};
							if ("SUBREDDIT_EXISTS" === a) return {
								name: s.fbt._("This Community Name is already taken", null, {
									hk: "1aiGKw"
								})
							};
							if ("SUBREDDIT_UNAVAILABLE" === a) return {
								name: s.fbt._("This Community Name is unavailable", null, {
									hk: "2Dl0j6"
								})
							}
						} else {
							if ("public_description" === t) return {
								publicDescription: s.fbt._("A Community Description is required", null, {
									hk: "tO1GW"
								})
							};
							if ("topics" === t && "TOPICS_MISSING" === a) return {
								topics: s.fbt._("A Primary Topic is required", null, {
									hk: "2DJ9vR"
								})
							}
						}
						return {
							generic: Object(d.a)(this.props.language, e)
						}
					}, this.state = {
						name: "",
						description: "",
						type: W.c.Public,
						over18: !1,
						waitingForSuccessfulCommunity: !1,
						restrictCommenting: !1,
						restrictPosting: !0
					}
				}
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(A.q)()), this.props.clearErrors()
				}
				componentWillUnmount() {
					clearTimeout(this.timeout)
				}
				render() {
					const {
						error: e,
						isCreatePending: t,
						isEmployee: a,
						isOverlay: n,
						language: r,
						onCloseLocation: o,
						onHideTooltip: l,
						onShowTooltip: d,
						sendEvent: m,
						userDoesNotHaveEnoughExpToCreateCommunity: u,
						userIsSuspended: p
					} = this.props, h = this.errorHelper(e), {
						over18: C,
						waitingForSuccessfulCommunity: b
					} = this.state, {
						location: g
					} = this.props;
					return i.a.createElement(z, {
						className: Object(c.a)(G.a.subredditCreation, {
							[G.a.isOverlay]: n
						}),
						isOverlay: n
					}, i.a.createElement("div", {
						className: G.a.container
					}, i.a.createElement("h1", {
						className: G.a.title
					}, s.fbt._("Create a community", null, {
						hk: "SlFa7"
					}), n && i.a.createElement(de, {
						onClick: () => {
							m(Object(P.a)()), o(g.state[j.a.CloseLocation])
						}
					})), u ? i.a.createElement("h2", {
						className: G.a.sublabel
					}, s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "44qhJp"
					})) : p ? i.a.createElement("h2", {
						className: G.a.sublabel
					}, s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "3trJMZ"
					})) : i.a.createElement(i.a.Fragment, null, i.a.createElement(w.e, {
						hideCountdown: !0,
						isCreateCommunity: !0,
						isRequired: !0,
						label: s.fbt._("Name", null, {
							hk: "3OIzgl"
						}),
						textContainerClassName: G.a.fullWidthTextContainer,
						onChange: this.onNameChange,
						maxChars: ee,
						value: this.state.name,
						subtext: i.a.createElement("span", {
							className: G.a.subtextContainer
						}, s.fbt._("Community names including capitalization cannot be changed.", null, {
							hk: "VjrZg"
						}), i.a.createElement("span", {
							id: ae,
							onMouseEnter: d,
							onMouseLeave: l,
							className: G.a.info
						}, i.a.createElement(se, null), i.a.createElement(ie, {
							caretOnTop: !0,
							tooltipId: ae,
							text: s.fbt._('Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").', null, {
								hk: "3RsycS"
							})
						})))
					}), h.name && i.a.createElement(me, {
						language: r
					}, h.name), i.a.createElement(w.j, {
						isRequired: !0,
						label: s.fbt._("Topics", null, {
							hk: "2iixv1"
						}),
						textContainerClassName: G.a.fullWidthTextContainer,
						subtext: i.a.createElement("span", {
							className: G.a.subtextContainer
						}, s.fbt._("This will help relevant users find your community.", null, {
							hk: "3LM2Jb"
						}), i.a.createElement("span", null, "".concat(this.props.selectedCommunityTopicsOptions.length, "/").concat(x.a))),
						direction: "column"
					}, i.a.createElement(k, null)), h.topics && i.a.createElement(me, {
						language: r
					}, h.topics), i.a.createElement(w.g, {
						hideCountdown: !0,
						isCreateCommunity: !0,
						isRequired: !0,
						label: s.fbt._("Description", null, {
							hk: "4gli9v"
						}),
						onChange: this.onDescriptionChange,
						maxChars: te,
						rows: 2,
						subtext: s.fbt._("This is how new members come to understand your community.", null, {
							hk: "35Gh2u"
						}),
						textContainerClassName: G.a.fullWidthTextContainer,
						value: this.state.description
					}), h.publicDescription && i.a.createElement(me, {
						language: r
					}, h.publicDescription), i.a.createElement(w.j, {
						label: s.fbt._("Community type", null, {
							hk: "152EhZ"
						}),
						direction: "column",
						isCreateCommunity: !0,
						textContainerClassName: G.a.fullWidthTextContainer
					}, i.a.createElement(M.a, {
						value: this.state.type,
						name: "type",
						onChange: this.onTypeChange
					}, he(a, "post"))), i.a.createElement("div", {
						className: Object(c.a)(G.a.field, {
							[G.a.isCreatePending]: t
						})
					}, i.a.createElement("div", {
						className: G.a.subtitle
					}, s.fbt._("Adult content", null, {
						hk: "20arB"
					})), i.a.createElement(D.a, {
						name: "over18",
						value: C,
						onChange: () => this.update(!this.state.over18, "over18"),
						disabled: t
					}, i.a.createElement("div", {
						className: G.a.nsfw
					}, "NSFW"), i.a.createElement("div", {
						className: G.a.sublabel
					}, s.fbt._("18+ year old community", null, {
						hk: "1XxZMV"
					})))), h.generic && i.a.createElement(me, {
						language: r
					}, h.generic), b && i.a.createElement("div", {
						className: G.a.pendingText
					}, s.fbt._("Your community is being created...", null, {
						hk: "3dSTrq"
					})), i.a.createElement("div", {
						className: Object(c.a)(G.a.buttonContainer, {
							[G.a.isOverlay]: n
						})
					}, n && i.a.createElement(L.i, {
						disabled: t,
						className: G.a.createButton,
						onClick: () => {
							o(g.state[j.a.CloseLocation]), m(Object(P.a)())
						}
					}, s.fbt._("Cancel", null, {
						hk: "1L11X7"
					})), i.a.createElement(L.f, {
						disabled: t,
						className: G.a.createButton,
						onClick: this.onCreateCommunityClick
					}, s.fbt._("Create Community", null, {
						hk: "QE8Y3"
					}))))))
				}
			}
			t.default = Object(N.c)(pe(Object(S.b)(Ce)))
		}
	}
]);
//# sourceMappingURL=SubredditCreation.46d29ae85c1e41cb3481.js.map