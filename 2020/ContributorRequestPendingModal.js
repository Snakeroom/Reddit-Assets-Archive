// https://www.redditstatic.com/desktop2x/ContributorRequestPendingModal.4c3144d2a30a9f83f61b.js
// Retrieved at 7/30/2020, 5:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ContributorRequestPendingModal", "ContributorRequestRequestModal"], {
		"./src/reddit/components/ContributorRequestFlow/PendingModal/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "kHmrHO0TlUatR2WQAWOs",
				titleFontH2: "a308N7IxGFIaTC1wqgnqv",
				titleFontH3: "_2Hs4ivMJohIlbUC-A8RUV1",
				titleFontH4: "_30Bgw_GCHem_R3AaaCfafN",
				titleFontH5: "_38pmXPkFZiFiQjkQVTepO0",
				titleFontH6: "_2v_3umwlscspURYtmzsOW4",
				metadataFont: "_3xC5SGiSgSwlzu0iOoFyk1",
				flairFont: "_1pTlKLk59p5VrbKmAUxFfx",
				labelsFont: "_20sSCgnXQdjEl3E7wcQRXc",
				actionFont: "pZIae_e_izjnnWk-ADnkA",
				smallButtonFont: "qWjRNd5fF1ab_LntB3X4j",
				largeButtonFont: "_2nYKHBmUaLzir7AFXPsMtl",
				tabFont: "_3FfewpBR_4VCrgXIZ-_RX7",
				strongTextFont: "_19jPuO1nLWeIcORtgEIErB",
				bodyFontH1: "_1Ye4ULbwrro6areweHd2Sx",
				bodyFontH2: "_3HrFqmd2yZoeSdnZAEOPtu",
				bodyFontH3: "_3wg_GGIamegiuXVAOx0jXF",
				bodyFontH4: "_2ckyzMtuspkiV5nyNCTLcV",
				bodyFontH5: "_1ubFFVN9SVMiUSN9OAxrcz",
				bodyFontH6: "_2XQiK7u09Z8hMppSi4HquI",
				bodyFont: "_20828B8NYtXTVy7i4u5l8p",
				bodyFontSmall: "_34mk61kYhwo60DGJVxLSPv",
				bodyFontMono: "_1hTcMMnVRQ0sewN_z99GAa",
				Component: "_2sBoAyFDM9hFHkT2UjE5Ep",
				component: "_2sBoAyFDM9hFHkT2UjE5Ep",
				DescriptionPending: "_94bbeDxkn_amKuGqD_ba2",
				descriptionPending: "_94bbeDxkn_amKuGqD_ba2",
				ModalBody: "_2ipSTk6TFcwbY5X_lMQJjr",
				modalBody: "_2ipSTk6TFcwbY5X_lMQJjr"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/TextButton/index.tsx"),
				b = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				_ = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				x = n("./src/reddit/selectors/platform.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/components/ContributorRequestFlow/PendingModal/index.m.less"),
				h = n.n(C),
				F = n("./src/lib/lessComponent.tsx");
			const y = F.a.div("DescriptionPending", h.a),
				g = F.a.wrapped(u.d, "ModalBody", h.a),
				E = Object(i.c)({
					restrictions: f.p,
					subreddit: x.f
				}),
				R = Object(o.b)(E, e => ({
					openContributorRequestPendingModal: () => e(Object(d.i)(m.a.CONTRIBUTOR_REQUEST_PENDING))
				}));
			class j extends r.a.Component {
				render() {
					const {
						openContributorRequestPendingModal: e,
						restrictions: t,
						subreddit: n
					} = this.props;
					if (!n) return null;
					const a = t === _.e.Comment ? _.a.Create : _.a.Draft;
					return r.a.createElement(g, null, r.a.createElement(c.ModalHeader, null, r.a.createElement(b.a, null, r.a.createElement(c.ModalTitle, null, s.fbt._("Request sent and pending...", null, {
						hk: "8x2US"
					})), r.a.createElement(p.a, {
						onClick: () => e()
					}, r.a.createElement(c.CloseIcon, null)))), r.a.createElement(u.k, null, r.a.createElement(y, null, s.fbt._("Your request to {restrictions} to {displayName} was sent and is pending. In the meantime, you can {action} a post and browse the community.", [s.fbt._param("restrictions", _.d[t]()), s.fbt._param("displayName", n.displayText), s.fbt._param("action", _.c[a]())], {
						hk: "2cTcEi"
					}))), r.a.createElement(u.f, null, r.a.createElement(u.q, {
						onClick: () => e()
					}, s.fbt._("ok", null, {
						hk: "Uhgei"
					}))))
				}
			}
			t.default = F.a.wrapped(Object(l.a)(R(j)), "Component", h.a)
		},
		"./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "ModalHeader", (function() {
				return O
			})), n.d(t, "ModalTitle", (function() {
				return M
			})), n.d(t, "CloseIcon", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/subreddit.ts"),
				m = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				b = n("./src/reddit/components/SubredditIcon/index.tsx"),
				_ = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/modals.ts"),
				f = n("./src/reddit/controls/TextButton/index.tsx"),
				C = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				F = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				g = n("./src/reddit/selectors/platform.ts"),
				E = n("./src/reddit/selectors/structuredStyles.ts"),
				R = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less"),
				q = n.n(j),
				v = n("./src/lib/lessComponent.tsx");
			const k = v.a.wrapped(m.d, "ModalBody", q.a),
				O = v.a.wrapped(m.h, "ModalHeader", q.a),
				M = v.a.div("ModalTitle", q.a),
				w = v.a.div("Title", q.a),
				S = v.a.div("Description", q.a),
				I = v.a.wrapped(m.b, "CloseIcon", q.a);
			class T extends o.a.Component {
				constructor(e) {
					super(e), this.onTextAreaChange = e => {
						this.setState({
							message: e.target.value
						})
					}, this.onCancelRequest = () => {
						this.props.sendEvent(Object(C.b)("cancel")), this.props.toggleContributorRequestModal()
					}, this.state = {
						message: s.fbt._("I would like to become an approved user of this community so I can {restrictions}", [s.fbt._param("restrictions", F.d[this.props.restrictions]())], {
							hk: "3tcbxn"
						})
					}
				}
				render() {
					if (!this.props.subreddit || !this.props.subredditAboutInfo) return null;
					const e = this.props.subreddit.displayText,
						t = this.props.subredditAboutInfo.disableContributorRequests,
						n = this.props.theme ? Object(y.f)(this.props.theme.newCommunityTheme.widgetColors.sidebarWidgetHeaderColor) : "";
					return o.a.createElement(k, {
						className: q.a.requestModal
					}, o.a.createElement(O, null, o.a.createElement(h.a, null, o.a.createElement("div", null, o.a.createElement(M, {
						style: {
							color: n
						}
					}, s.fbt._("Become an approved user of", null, {
						hk: "u33RG"
					})), o.a.createElement(w, {
						style: {
							color: n
						}
					}, o.a.createElement(b.b, {
						className: q.a.subredditIcon,
						iconUrl: this.props.subredditIcon.url,
						primaryColor: this.props.subredditIcon.color
					}), o.a.createElement("span", null, e))), o.a.createElement(f.a, {
						onClick: this.onCancelRequest
					}, o.a.createElement(I, null)))), o.a.createElement(m.k, null, t ? o.a.createElement(S, null, s.fbt._("The moderators have disabled requests in this community. Check the community rules for more details.", null, {
						hk: "2J5GoK"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(S, null, s.fbt._("Only approved users can {restrictions} in {displayName}. To become an approved user, send a request to the moderators.", [s.fbt._param("restrictions", F.d[this.props.restrictions]()), s.fbt._param("displayName", e)], {
						hk: "1q9PJW"
					})), o.a.createElement(p.c, {
						className: q.a.textarea,
						label: s.fbt._("Request to moderators", null, {
							hk: "4hiUqP"
						}),
						value: this.state.message,
						onChange: this.onTextAreaChange,
						state: void 0,
						required: !0
					}))), o.a.createElement(m.f, null, t ? o.a.createElement(m.q, {
						onClick: () => this.props.toggleContributorRequestModal()
					}, s.fbt._("ok", null, {
						hk: "22zWTN"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
						"data-redditstyle": !0,
						onClick: this.onCancelRequest
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(m.q, {
						onClick: () => {
							this.props.sendEvent(Object(C.b)("request_approval")), this.props.makeContributorRequest(e, this.state.message, this.props.restrictions), this.props.toggleContributorRequestModal()
						}
					}, s.fbt._("Send Request", null, {
						hk: "1UMaEr"
					})))))
				}
			}
			t.default = v.a.wrapped(Object(a.a)(Object(d.a)(Object(i.b)(() => Object(l.c)({
				subredditAboutInfo: R.j,
				restrictions: R.p,
				subreddit: g.f,
				subredditIcon: E.c
			}), e => ({
				makeContributorRequest: (t, n, s) => e(Object(u.n)(t, n, s)),
				toggleContributorRequestModal: () => e(Object(c.i)(x.a.CONTRIBUTOR_REQUEST))
			}))(Object(_.c)(T)))), "Component", q.a)
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return x
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return F
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Input/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
				}
				return n
			};
			const p = o.a.div("icon", c.a),
				b = o.a.textarea("textarea", c.a),
				_ = o.a.span("Invalid", c.a);
			var x, f;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(x || (x = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(f || (f = {}));
			const C = e => a.a.createElement("div", {
					className: Object(r.a)(e.isRequired && c.a.required, e.className, Object.assign({
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea
					}, !!e.isTextarea && {
						[c.a.mValid]: e.state === x.Valid,
						[c.a.mInvalid]: e.state === x.Invalid,
						[c.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
					}))
				}, a.a.createElement("label", {
					className: Object(r.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && a.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && a.a.createElement(p, {
					className: Object(r.a)({
						[c.a.mValid]: e.state === x.Valid,
						[c.a.mInvalid]: e.state === x.Invalid
					})
				}, e.state === x.Valid && a.a.createElement(l.a, null), e.state === x.Invalid && a.a.createElement(_, null, "!")))),
				h = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: s,
						isRequired: o,
						label: l,
						onKeyDown: d,
						state: p
					} = e, b = m(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return a.a.createElement(C, {
						backgroundColorState: t,
						className: n,
						isRequired: o,
						label: l,
						state: p
					}, a.a.createElement(i.a, u({}, b, {
						className: Object(r.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: d
					})))
				},
				F = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: s,
						isRequired: o,
						label: i,
						onKeyDown: l,
						state: d
					} = e, p = m(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return a.a.createElement(C, {
						backgroundColorState: t,
						className: n,
						isRequired: o,
						label: i,
						state: d,
						isTextarea: !0
					}, a.a.createElement(b, u({}, p, {
						className: Object(r.a)({
							[c.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: l
					})))
				}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/index.m.less"),
				r = n.n(a);
			t.a = s.a.input("input", r.a)
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => t => Object.assign(Object.assign({}, s.defaults(t)), {
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: s.subreddit(t)
				}),
				r = e => t => Object.assign(Object.assign({}, s.defaults(t)), {
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: s.subreddit(t)
				})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=ContributorRequestPendingModal.4c3144d2a30a9f83f61b.js.map