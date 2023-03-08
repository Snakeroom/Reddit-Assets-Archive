// https://www.redditstatic.com/desktop2x/RequestToJoinPrivateSubredditModal.c0151136882472cdbabf.js
// Retrieved at 3/8/2023, 10:10:04 AM by Reddit Dataminer v1.0.0
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
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
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
				S = a("./src/reddit/models/Toast/index.ts"),
				C = a("./src/reddit/selectors/platform.ts"),
				E = a("./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.m.less"),
				h = a.n(E),
				R = a("./src/lib/lessComponent.tsx");
			const j = R.a.wrapped(u.e, "ModalBody", h.a),
				k = R.a.wrapped(u.b, "CloseIcon", h.a);
			t.default = R.a.wrapped(Object(l.a)((function() {
				const e = Object(p.a)(),
					t = Object(i.d)(),
					[a, l] = Object(r.useState)(() => n.fbt._("I would like to join this community.", null, {
						hk: "1Cgi1B"
					})),
					E = Object(i.e)(C.d);
				if (!E) return null;
				const R = () => t(Object(o.i)(b.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT)),
					q = n.fbt._("Request to join r/{subreddit} sent", [n.fbt._param("subreddit", E)], {
						hk: "3Ro26f"
					}),
					y = Object(c.e)(q, S.b.SuccessCommunity);
				return s.a.createElement(j, {
					className: h.a.requestModal
				}, s.a.createElement(u.i, null, s.a.createElement(f.a, null, s.a.createElement("div", null, s.a.createElement("div", {
					className: h.a.ModalTitle
				}, n.fbt._("Request to join", null, {
					hk: "2VKavP"
				})), s.a.createElement("div", {
					className: h.a.Title
				}, s.a.createElement("span", null, `r/${E}`))), s.a.createElement(_.a, {
					onClick: R
				}, s.a.createElement(k, null)))), s.a.createElement(u.l, null, s.a.createElement("div", {
					className: h.a.Description
				}, n.fbt._("Write a short message to the moderators explaining why you want to join.", null, {
					hk: "4uvu3g"
				})), s.a.createElement(m.c, {
					className: h.a.textarea,
					label: n.fbt._("Message to moderators", null, {
						hk: "4sX9bQ"
					}),
					value: a,
					onChange: e => l(e.target.value),
					state: void 0,
					required: !0
				})), s.a.createElement(u.g, null, s.a.createElement(u.a, {
					"data-redditstyle": !0,
					onClick: R
				}, n.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), s.a.createElement(u.r, {
					onClick: () => {
						e(Object(x.b)(v.b.ContentGate)), t(Object(d.n)(`r/${E}`, a, v.e.View)), R(), t(Object(c.f)(y))
					}
				}, n.fbt._("Send Request", null, {
					hk: "1UMaEr"
				}))))
			})), "Component", h.a)
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
				return S
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
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
			const f = e => r.a.createElement("div", {
					className: Object(s.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === x.Valid,
							[c.a.mInvalid]: e.state === x.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === p.WhiteFields
						}
					})
				}, r.a.createElement("label", {
					className: Object(s.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && r.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && r.a.createElement(m, {
					className: Object(s.a)({
						[c.a.mValid]: e.state === x.Valid,
						[c.a.mInvalid]: e.state === x.Invalid
					})
				}, e.state === x.Valid && r.a.createElement(o.a, null), e.state === x.Invalid && r.a.createElement(_, null, "!")))),
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
					return r.a.createElement(f, {
						backgroundColorState: t,
						className: a,
						isRequired: i,
						label: o,
						state: m
					}, r.a.createElement(l.a, u({}, b, {
						className: Object(s.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: d
					})))
				},
				S = e => {
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
					return r.a.createElement(f, {
						backgroundColorState: t,
						className: a,
						isRequired: i,
						label: l,
						state: d,
						isTextarea: !0
					}, r.a.createElement(b, u({}, m, {
						className: Object(s.a)({
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
				r = a("./src/reddit/controls/Input/index.m.less"),
				s = a.n(r);
			t.a = n.a.input("input", s.a)
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return s
			}));
			var n = a("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...n.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: n.lb(t)
				}),
				s = e => t => ({
					...n.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: n.lb(t)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RequestToJoinPrivateSubredditModal.c0151136882472cdbabf.js.map