// https://www.redditstatic.com/desktop2x/RequestToJoinPrivateSubredditModal.3a837d25d434efd41ba0.js
// Retrieved at 6/21/2023, 9:00:05 PM by Reddit Dataminer v1.0.0
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
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/reddit/actions/modal.ts"),
				d = a("./src/reddit/actions/subreddit.ts"),
				c = a("./src/reddit/actions/toaster.ts"),
				u = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				b = a("./src/reddit/constants/modals.ts"),
				_ = a("./src/reddit/controls/TextButton/index.tsx"),
				p = a("./src/reddit/helpers/trackers/privateCommunity.ts"),
				x = a("./src/reddit/hooks/useTracking.ts"),
				f = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				v = a("./src/reddit/models/SubredditRestrictions/index.ts"),
				C = a("./src/reddit/models/Toast/index.ts"),
				S = a("./src/reddit/selectors/experiments/cnc/index.ts"),
				j = a("./src/reddit/selectors/platform.ts"),
				h = a("./src/reddit/selectors/user.ts"),
				E = a("./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.m.less"),
				O = a.n(E),
				R = a("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const q = R.a.wrapped(u.e, "ModalBody", O.a),
				y = R.a.wrapped(u.b, "CloseIcon", O.a);
			const N = Object(o.a)((function(e) {
				let {
					closeModal: t,
					subredditName: a
				} = e;
				const o = Object(x.a)(),
					l = Object(i.d)(),
					[b, S] = Object(s.useState)(() => n.fbt._("I would like to join this community.", null, {
						hk: "1Cgi1B"
					}));
				if (!a) return null;
				const j = n.fbt._("Request to join r/{subreddit} sent", [n.fbt._param("subreddit", a)], {
						hk: "3Ro26f"
					}),
					h = Object(c.e)(j, C.b.SuccessCommunity);
				return r.a.createElement(q, {
					className: O.a.requestModal
				}, r.a.createElement(u.i, null, r.a.createElement(f.a, null, r.a.createElement("div", null, r.a.createElement("div", {
					className: O.a.ModalTitle
				}, n.fbt._("Request to join", null, {
					hk: "2VKavP"
				})), r.a.createElement("div", {
					className: O.a.Title
				}, r.a.createElement("span", null, `r/${a}`))), r.a.createElement(_.a, {
					onClick: t
				}, r.a.createElement(y, null)))), r.a.createElement(u.l, null, r.a.createElement("div", {
					className: O.a.Description
				}, n.fbt._("Write a short message to the moderators explaining why you want to join.", null, {
					hk: "4uvu3g"
				})), r.a.createElement(m.c, {
					className: O.a.textarea,
					label: n.fbt._("Message to moderators", null, {
						hk: "4sX9bQ"
					}),
					value: b,
					onChange: e => S(e.target.value),
					state: void 0,
					required: !0
				})), r.a.createElement(u.g, null, r.a.createElement(u.a, {
					"data-redditstyle": !0,
					onClick: t
				}, n.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), r.a.createElement(u.r, {
					onClick: () => {
						o(Object(p.b)(v.b.ContentGate)), l(Object(d.n)(`r/${a}`, b, v.e.View)), t(), l(Object(c.f)(h))
					}
				}, n.fbt._("Send Request", null, {
					hk: "1UMaEr"
				}))))
			}));
			t.default = e => {
				const t = Object(i.d)(),
					a = Object(i.e)(S.c),
					n = !!Object(i.e)(h.m),
					o = Object(i.e)(j.d),
					d = Object(i.e)(e => Object(h.h)(e, o || "")),
					c = Object(s.useCallback)(() => {
						t(Object(l.i)(b.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT)), a && t(Object(l.h)(b.a.PRIVATE_COMMUNITY_ACCESS_MODAL, {
							subredditName: o,
							subredditDescription: (null == d ? void 0 : d.subredditDescription) || "",
							isContributorRequestsDisabled: !!(null == d ? void 0 : d.isContributorRequestsDisabled)
						}))
					}, [t, n, a]);
				return r.a.createElement(N, k({}, e, {
					subredditName: o,
					closeModal: c,
					onOverlayClick: c,
					className: O.a.Component
				}))
			}
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
				return p
			})), a.d(t, "a", (function() {
				return x
			})), a.d(t, "b", (function() {
				return v
			})), a.d(t, "c", (function() {
				return C
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/lessComponent.tsx"),
				o = a("./src/reddit/controls/Input/index.tsx"),
				l = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
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
			var p, x;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(p || (p = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(x || (x = {}));
			const f = e => s.a.createElement("div", {
					className: Object(r.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === p.Valid,
							[c.a.mInvalid]: e.state === p.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
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
						[c.a.mValid]: e.state === p.Valid,
						[c.a.mInvalid]: e.state === p.Invalid
					})
				}, e.state === p.Valid && s.a.createElement(l.a, null), e.state === p.Invalid && s.a.createElement(_, null, "!")))),
				v = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: n,
						isRequired: i,
						label: l,
						onKeyDown: d,
						state: m,
						...b
					} = e;
					return s.a.createElement(f, {
						backgroundColorState: t,
						className: a,
						isRequired: i,
						label: l,
						state: m
					}, s.a.createElement(o.a, u({}, b, {
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
						label: o,
						onKeyDown: l,
						state: d,
						...m
					} = e;
					return s.a.createElement(f, {
						backgroundColorState: t,
						className: a,
						isRequired: i,
						label: o,
						state: d,
						isTextarea: !0
					}, s.a.createElement(b, u({}, m, {
						className: Object(r.a)({
							[c.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: l
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
					...n.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: n.lb(t)
				}),
				r = e => t => ({
					...n.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: n.lb(t)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RequestToJoinPrivateSubredditModal.3a837d25d434efd41ba0.js.map