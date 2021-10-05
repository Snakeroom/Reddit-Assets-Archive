// https://www.redditstatic.com/desktop2x/ContributorRequestRequestModal.b50b5dfe8e74e18a2579.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ContributorRequestRequestModal"], {
		"./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less": function(e, t, a) {
			e.exports = {
				requestModal: "_27TCiQwLZWWlFgG7t0oukF",
				icon: "_3FpdtrZ4Qhlog7NlIb2vAc",
				subredditIcon: "_1azgCQXYDaIZr6oKZqw_vj",
				ModalBody: "_1Qof37a979-QG1OLOBJc2V",
				modalBody: "_1Qof37a979-QG1OLOBJc2V",
				ModalHeader: "_1EjKGJfFqj40_coL0u2kFX",
				modalHeader: "_1EjKGJfFqj40_coL0u2kFX",
				ModalTitle: "_2uFmM79ezVYxcsYH55jyqR",
				modalTitle: "_2uFmM79ezVYxcsYH55jyqR",
				Title: "_3fGlFo7GNRVESb99pO5aH-",
				title: "_3fGlFo7GNRVESb99pO5aH-",
				Description: "_3fdg_9Zvp6zpXL5FMiY4ME",
				description: "_3fdg_9Zvp6zpXL5FMiY4ME",
				Component: "_1o3pDfAXeDo-a8XUIf7xfa",
				component: "_1o3pDfAXeDo-a8XUIf7xfa"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "ModalHeader", (function() {
				return j
			})), a.d(t, "ModalTitle", (function() {
				return M
			})), a.d(t, "CloseIcon", (function() {
				return w
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				n = a("./node_modules/react/index.js"),
				o = a.n(n),
				i = a("./node_modules/react-redux/es/index.js"),
				l = a("./node_modules/reselect/es/index.js"),
				d = a("./src/higherOrderComponents/asModal/index.tsx"),
				c = a("./src/reddit/actions/modal.ts"),
				u = a("./src/reddit/actions/subreddit.ts"),
				m = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				b = a("./src/reddit/components/SubredditIcon/index.tsx"),
				h = a("./src/reddit/components/TrackingHelper/index.tsx"),
				x = a("./src/reddit/constants/modals.ts"),
				_ = a("./src/reddit/controls/TextButton/index.tsx"),
				f = a("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				C = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				v = a("./src/reddit/models/SubredditRestrictions/index.ts"),
				E = a("./src/reddit/models/Theme/index.ts"),
				q = a("./src/reddit/selectors/platform.ts"),
				g = a("./src/reddit/selectors/structuredStyles.ts"),
				R = a("./src/reddit/selectors/subreddit.ts"),
				y = a("./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less"),
				F = a.n(y),
				I = a("./src/lib/lessComponent.tsx");
			const k = I.a.wrapped(m.e, "ModalBody", F.a),
				j = I.a.wrapped(m.i, "ModalHeader", F.a),
				M = I.a.div("ModalTitle", F.a),
				S = I.a.div("Title", F.a),
				O = I.a.div("Description", F.a),
				w = I.a.wrapped(m.b, "CloseIcon", F.a);
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.onTextAreaChange = e => {
						this.setState({
							message: e.target.value
						})
					}, this.onCancelRequest = () => {
						this.props.sendEvent(Object(f.b)("cancel")), this.props.toggleContributorRequestModal()
					}, this.state = {
						message: s.fbt._("I would like to become an approved user of this community so I can {restrictions}", [s.fbt._param("restrictions", v.d[this.props.restrictions]())], {
							hk: "3tcbxn"
						})
					}
				}
				render() {
					if (!this.props.subreddit || !this.props.subredditAboutInfo) return null;
					const e = this.props.subreddit.displayText,
						t = this.props.subredditAboutInfo.disableContributorRequests,
						a = this.props.theme ? Object(E.f)(this.props.theme.newCommunityTheme.widgetColors.sidebarWidgetHeaderColor) : "";
					return o.a.createElement(k, {
						className: F.a.requestModal
					}, o.a.createElement(j, null, o.a.createElement(C.a, null, o.a.createElement("div", null, o.a.createElement(M, {
						style: {
							color: a
						}
					}, s.fbt._("Become an approved user of", null, {
						hk: "u33RG"
					})), o.a.createElement(S, {
						style: {
							color: a
						}
					}, o.a.createElement(b.b, {
						className: F.a.subredditIcon,
						iconUrl: this.props.subredditIcon.url,
						primaryColor: this.props.subredditIcon.color
					}), o.a.createElement("span", null, e))), o.a.createElement(_.a, {
						onClick: this.onCancelRequest
					}, o.a.createElement(w, null)))), o.a.createElement(m.l, null, t ? o.a.createElement(O, null, s.fbt._("The moderators have disabled requests in this community. Check the community rules for more details.", null, {
						hk: "2J5GoK"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(O, null, s.fbt._("Only approved users can {restrictions} in {displayName}. To become an approved user, send a request to the moderators.", [s.fbt._param("restrictions", v.d[this.props.restrictions]()), s.fbt._param("displayName", e)], {
						hk: "1q9PJW"
					})), o.a.createElement(p.c, {
						className: F.a.textarea,
						label: s.fbt._("Request to moderators", null, {
							hk: "4hiUqP"
						}),
						value: this.state.message,
						onChange: this.onTextAreaChange,
						state: void 0,
						required: !0
					}))), o.a.createElement(m.g, null, t ? o.a.createElement(m.r, {
						onClick: () => this.props.toggleContributorRequestModal()
					}, s.fbt._("ok", null, {
						hk: "22zWTN"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
						"data-redditstyle": !0,
						onClick: this.onCancelRequest
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(m.r, {
						onClick: () => {
							this.props.sendEvent(Object(f.b)("request_approval")), this.props.makeContributorRequest(e, this.state.message, this.props.restrictions), this.props.toggleContributorRequestModal()
						}
					}, s.fbt._("Send Request", null, {
						hk: "1UMaEr"
					})))))
				}
			}
			t.default = I.a.wrapped(Object(r.a)(Object(d.a)(Object(i.b)(() => Object(l.c)({
				subredditAboutInfo: R.h,
				restrictions: R.n,
				subreddit: q.e,
				subredditIcon: g.b
			}), e => ({
				makeContributorRequest: (t, a, s) => e(Object(u.n)(t, a, s)),
				toggleContributorRequestModal: () => e(Object(c.i)(x.a.CONTRIBUTOR_REQUEST))
			}))(Object(h.c)(N)))), "Component", F.a)
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
				return h
			})), a.d(t, "a", (function() {
				return x
			})), a.d(t, "b", (function() {
				return f
			})), a.d(t, "c", (function() {
				return C
			}));
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				i = a("./src/reddit/controls/Input/index.tsx"),
				l = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = a.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = o.a.div("icon", c.a),
				p = o.a.textarea("textarea", c.a),
				b = o.a.span("Invalid", c.a);
			var h, x;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(h || (h = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(x || (x = {}));
			const _ = e => r.a.createElement("div", {
					className: Object(n.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === h.Valid,
							[c.a.mInvalid]: e.state === h.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
						}
					})
				}, r.a.createElement("label", {
					className: Object(n.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && r.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && r.a.createElement(m, {
					className: Object(n.a)({
						[c.a.mValid]: e.state === h.Valid,
						[c.a.mInvalid]: e.state === h.Invalid
					})
				}, e.state === h.Valid && r.a.createElement(l.a, null), e.state === h.Invalid && r.a.createElement(b, null, "!")))),
				f = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: s,
						isRequired: o,
						label: l,
						onKeyDown: d,
						state: m,
						...p
					} = e;
					return r.a.createElement(_, {
						backgroundColorState: t,
						className: a,
						isRequired: o,
						label: l,
						state: m
					}, r.a.createElement(i.a, u({}, p, {
						className: Object(n.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: d
					})))
				},
				C = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: s,
						isRequired: o,
						label: i,
						onKeyDown: l,
						state: d,
						...m
					} = e;
					return r.a.createElement(_, {
						backgroundColorState: t,
						className: a,
						isRequired: o,
						label: i,
						state: d,
						isTextarea: !0
					}, r.a.createElement(p, u({}, m, {
						className: Object(n.a)({
							[c.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: l
					})))
				}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/lib/lessComponent.tsx"),
				r = a("./src/reddit/controls/Input/index.m.less"),
				n = a.n(r);
			t.a = s.a.input("input", n.a)
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return n
			}));
			var s = a("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...s.defaults(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: s.subreddit(t)
				}),
				n = e => t => ({
					...s.defaults(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: s.subreddit(t)
				})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ContributorRequestRequestModal.b50b5dfe8e74e18a2579.js.map