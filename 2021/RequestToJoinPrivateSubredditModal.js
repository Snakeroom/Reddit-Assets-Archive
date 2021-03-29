// https://www.redditstatic.com/desktop2x/RequestToJoinPrivateSubredditModal.17bde55832f71705fd71.js
// Retrieved at 3/29/2021, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RequestToJoinPrivateSubredditModal"], {
		"./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.m.less": function(e, t, a) {
			e.exports = {
				requestModal: "uHZdKM3uzbmJzfoWwFPh5",
				ModalBody: "_2khlH4mqDs1wSnxNZZ-Wgz",
				modalBody: "_2khlH4mqDs1wSnxNZZ-Wgz",
				ModalTitle: "_1cTiESqarzFGiWqVTJtkiD",
				modalTitle: "_1cTiESqarzFGiWqVTJtkiD",
				Title: "_1d0Og0_od3fZw4ROXnNsFH",
				title: "_1d0Og0_od3fZw4ROXnNsFH",
				Description: "_1J4zSUanU3PgRtnJZ7SW5a",
				description: "_1J4zSUanU3PgRtnJZ7SW5a",
				Component: "_3qulT1tkP_nfj13FZi6Vmv",
				component: "_3qulT1tkP_nfj13FZi6Vmv"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				i = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/higherOrderComponents/asModal/index.tsx"),
				o = a("./src/reddit/actions/modal.ts"),
				d = a("./src/reddit/actions/subreddit.ts"),
				c = a("./src/reddit/actions/toaster.ts"),
				u = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				b = a("./src/reddit/constants/modals.ts"),
				_ = a("./src/reddit/controls/TextButton/index.tsx"),
				x = a("./src/reddit/helpers/trackers/privateCommunity.ts"),
				p = a("./src/reddit/hooks/useTracking.ts"),
				f = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				v = a("./src/reddit/models/SubredditRestrictions/index.ts"),
				C = a("./src/reddit/models/Toast/index.ts"),
				S = a("./src/reddit/selectors/platform.ts"),
				h = a("./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.m.less"),
				E = a.n(h),
				j = a("./src/lib/lessComponent.tsx");
			const k = j.a.wrapped(u.d, "ModalBody", E.a),
				R = j.a.wrapped(u.b, "CloseIcon", E.a);
			t.default = j.a.wrapped(Object(l.a)((function() {
				const e = Object(p.a)(),
					t = Object(i.d)(),
					[a, l] = Object(s.useState)(() => n.fbt._("I would like to join this community.", null, {
						hk: "1Cgi1B"
					})),
					h = Object(i.e)(S.d);
				if (!h) return null;
				const j = () => t(Object(o.i)(b.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT)),
					q = n.fbt._("Request to join r/{subreddit} sent", [n.fbt._param("subreddit", h)], {
						hk: "3Ro26f"
					}),
					w = Object(c.e)(q, C.b.SuccessCommunity);
				return r.a.createElement(k, {
					className: E.a.requestModal
				}, r.a.createElement(u.h, null, r.a.createElement(f.a, null, r.a.createElement("div", null, r.a.createElement("div", {
					className: E.a.ModalTitle
				}, n.fbt._("Request to join", null, {
					hk: "2VKavP"
				})), r.a.createElement("div", {
					className: E.a.Title
				}, r.a.createElement("span", null, `r/${h}`))), r.a.createElement(_.a, {
					onClick: j
				}, r.a.createElement(R, null)))), r.a.createElement(u.k, null, r.a.createElement("div", {
					className: E.a.Description
				}, n.fbt._("Write a short message to the moderators explaining why you want to join.", null, {
					hk: "4uvu3g"
				})), r.a.createElement(m.c, {
					className: E.a.textarea,
					label: n.fbt._("Message to moderators", null, {
						hk: "4sX9bQ"
					}),
					value: a,
					onChange: e => l(e.target.value),
					state: void 0,
					required: !0
				})), r.a.createElement(u.f, null, r.a.createElement(u.a, {
					"data-redditstyle": !0,
					onClick: j
				}, n.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), r.a.createElement(u.q, {
					onClick: () => {
						e(Object(x.b)(v.b.ContentGate)), t(Object(d.n)(`r/${h}`, a, v.e.View)), j(), t(Object(c.f)(w))
					}
				}, n.fbt._("Send Request", null, {
					hk: "1UMaEr"
				}))))
			})), "Component", E.a)
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_21N5nyVpBzbYCGTZ5WIri4",
				field: "_3K-rjepIoTAwKn_2B6UjSe",
				textareaField: "_3MvsRRj8v7ENJxFd2FRVzJ",
				textareaContainer: "_2q-RFz4xm8SXUM0zMrr8fq",
				mValid: "_2SuoSID5jS_A8otvMZNbUx",
				mInvalid: "_10eyptxJ3JPt74-_F9S7Y2",
				mWhiteField: "ywq-YkM3-987lbv_INHu_",
				control: "f_d5CYdNQxWwaGxH1SK7O",
				hasState: "_2N0IHX_0DbIGyJAPD5co-v",
				textarea: "_3zFItbRAgic4B5QFRuG51C",
				label: "_25QcYBzdEJtMuM4oKa6C_E",
				required: "_237-Cb_7kzH90efX4m0ikl",
				icon: "_3DmUjRewdA0uXlriQWqBi6",
				Invalid: "_1G5fQQh3gLl4hc3DIMA5j3",
				invalid: "_1G5fQQh3gLl4hc3DIMA5j3"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "d", (function() {
				return x
			})), a.d(t, "a", (function() {
				return p
			})), a.d(t, "b", (function() {
				return v
			})), a.d(t, "c", (function() {
				return C
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/lessComponent.tsx"),
				l = a("./src/reddit/controls/Input/index.tsx"),
				o = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = a.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = i.a.div("icon", c.a),
				b = i.a.textarea("textarea", c.a),
				_ = i.a.span("Invalid", c.a);
			var x, p;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(x || (x = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(p || (p = {}));
			const f = e => s.a.createElement("div", {
					className: Object(r.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === x.Valid,
							[c.a.mInvalid]: e.state === x.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === p.WhiteFields
						}
					})
				}, s.a.createElement("label", {
					className: Object(r.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && s.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && s.a.createElement(m, {
					className: Object(r.a)({
						[c.a.mValid]: e.state === x.Valid,
						[c.a.mInvalid]: e.state === x.Invalid
					})
				}, e.state === x.Valid && s.a.createElement(o.a, null), e.state === x.Invalid && s.a.createElement(_, null, "!")))),
				v = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: n,
						isRequired: i,
						label: o,
						onKeyDown: d,
						state: m,
						...b
					} = e;
					return s.a.createElement(f, {
						backgroundColorState: t,
						className: a,
						isRequired: i,
						label: o,
						state: m
					}, s.a.createElement(l.a, u({}, b, {
						className: Object(r.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: d
					})))
				},
				C = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: n,
						isRequired: i,
						label: l,
						onKeyDown: o,
						state: d,
						...m
					} = e;
					return s.a.createElement(f, {
						backgroundColorState: t,
						className: a,
						isRequired: i,
						label: l,
						state: d,
						isTextarea: !0
					}, s.a.createElement(b, u({}, m, {
						className: Object(r.a)({
							[c.a.mWhiteField]: e.backgroundColorState === p.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: o
					})))
				}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./src/lib/lessComponent.tsx"),
				s = a("./src/reddit/controls/Input/index.m.less"),
				r = a.n(s);
			t.a = n.a.input("input", r.a)
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "b", (function() {
				return r
			}));
			var n = a("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...n.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: n.subreddit(t)
				}),
				r = e => t => ({
					...n.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: n.subreddit(t)
				})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RequestToJoinPrivateSubredditModal.17bde55832f71705fd71.js.map