// https://www.redditstatic.com/desktop2x/editCollectionModal.58fe69b14228f3d42945.js
// Retrieved at 6/7/2023, 1:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["editCollectionModal"], {
		"./node_modules/lodash/union.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFlatten.js"),
				o = n("./node_modules/lodash/_baseRest.js"),
				a = n("./node_modules/lodash/_baseUniq.js"),
				r = n("./node_modules/lodash/isArrayLikeObject.js"),
				i = o((function(e) {
					return a(s(e, 1, r, !0))
				}));
			e.exports = i
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/constants/intlSupport.ts");

			function r(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: r,
					locale: i = s.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const c = new Date(e * o.Xb);
				return a.a ? new Intl.DateTimeFormat(i, {
					month: r ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(c) : c.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.DEFAULT_LOCALE;
				const n = e.toString().length > 10,
					o = new Date(e * (n ? 1 : 1e3));
				return o.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => o.a.createElement(r.b, {
				className: Object(a.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
			}, d._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [d._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less": function(e, t, n) {
			e.exports = {
				Metadata: "YxCA1Mpgi_ThsEnFr_EFv",
				metadata: "YxCA1Mpgi_ThsEnFr_EFv",
				postEventMeta: "UORiCb6Mik-agLw97Owil"
			}
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = n("./src/reddit/helpers/postEvent.ts"),
				d = n("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.wrapped(e => o.a.createElement("span", {
				className: e.className
			}, e.children), "Metadata", l.a), p = e => {
				let {
					post: t
				} = e;
				return Object(c.a)(t) ? o.a.createElement(i.a, {
					className: l.a.postEventMeta,
					post: t
				}) : o.a.createElement(o.a.Fragment, null, !t.isScoreHidden && o.a.createElement(o.a.Fragment, null, o.a.createElement(m, {
					"data-click-id": "score"
				}, u._({
					"*": "{Post score} points",
					_1: "1 point"
				}, [u._plural(t.score, "Post score", Object(a.b)(t.score))], {
					hk: "1gwCFh"
				})), o.a.createElement(m, null, "·")), o.a.createElement(m, {
					"data-click-id": "comments"
				}, u._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [u._plural(t.numComments, "number", Object(a.b)(t.numComments))], {
					hk: "3eG58Q"
				})))
			}
		},
		"./src/reddit/components/EditCollectionModal/index.m.less": function(e, t, n) {
			e.exports = {
				editCollectionWrapper: "_1UZRpW-wwFunqHlHOEMDFF",
				fieldWrapper: "_12Ym_kPTwUFkTpbml49oB2",
				textArea: "_2bBBucE7Lr_QvHeZdVha-C",
				modalTitle: "cz4nQZS4-Ah1NDdX2DwsF",
				closeWrapper: "_3eU1gMlNmVM6fygUFKjuXD",
				bodyContainer: "_15q7Fm7-gLiuxQpuG0mBvp",
				loadingIcon: "qZqo2u0zIYBRClHOmC3Cq",
				dragItem: "_3ePcD9lWiNU6gMBmmMTGQ6",
				layoutTypeTitle: "AHrUrG7C9xmrBKgefWdnP",
				layoutOptionWrapper: "_14_Dy5mCUgnbjLEjJaB0Y8",
				optionTextWrapper: "_1zryUAQDL1fjs_BVf1JbcN",
				layoutTitle: "bdt3ebfdfVB5gJeYb6HHi",
				layoutSubTitle: "_1c68O-ixBjwI1pk1EsOaYJ",
				Wrapper: "_1ZCRTZl3DvL-yCtJEUvZt",
				wrapper: "_1ZCRTZl3DvL-yCtJEUvZt",
				TopRow: "_2kC92TZVcs-YI7FltgMqu-",
				topRow: "_2kC92TZVcs-YI7FltgMqu-",
				Close: "_1Gz3c6sX_hcan-ST-Xs-na",
				close: "_1Gz3c6sX_hcan-ST-Xs-na",
				PostTitle: "_3rOQe6dqENQh5N5U4vvkKE",
				postTitle: "_3rOQe6dqENQh5N5U4vvkKE",
				FooterWrapper: "_3BdtVgxZcjOVx8y1TdLH1o",
				footerWrapper: "_3BdtVgxZcjOVx8y1TdLH1o",
				InlineRow: "_2jKZA9Gmx1sAbGBpeCkzOu",
				inlineRow: "_2jKZA9Gmx1sAbGBpeCkzOu",
				Label: "_2CrPDFp_4iR49a-I9KuINI",
				label: "_2CrPDFp_4iR49a-I9KuINI",
				Tab: "_2aOMUnr4Nw4j9gLaU2mth7",
				tab: "_2aOMUnr4Nw4j9gLaU2mth7",
				selected: "_1a66nC3jiXToOIapmdro_7"
			}
		},
		"./src/reddit/components/EditCollectionModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "EditCollectionModal", (function() {
				return U
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/postCollection/index.ts"),
				u = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = n("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/DragItem/index.tsx"),
				h = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				x = n("./src/reddit/constants/keycodes.ts"),
				v = n("./src/reddit/constants/postCreation.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = n("./src/reddit/controls/RadioInput/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				_ = n("./src/reddit/controls/Sortable/index.tsx"),
				E = n("./src/reddit/icons/svgs/Close/index.tsx"),
				L = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/models/PostCollection/index.ts"),
				S = n("./src/reddit/selectors/postCollection.ts"),
				O = n("./src/reddit/components/EditCollectionModal/index.m.less"),
				D = n.n(O);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 10,
				N = e => {
					let {
						label: t,
						...n
					} = e;
					return r.a.createElement("div", {
						className: D.a.fieldWrapper
					}, r.a.createElement("label", {
						className: D.a.Label
					}, t), r.a.createElement(h.i, T({
						className: D.a.textArea,
						disabled: !1
					}, n)), r.a.createElement(u.a, {
						maxChars: n.maxLength,
						text: n.value
					}))
				},
				P = e => {
					let {
						onLayoutChange: t,
						displayLayout: n
					} = e;
					return r.a.createElement("div", {
						className: D.a.layoutTypeWrapper
					}, r.a.createElement("div", {
						className: D.a.layoutTypeTitle
					}, s.fbt._("Layout type", null, {
						hk: "39DMVQ"
					})), r.a.createElement(f.a, {
						name: "type",
						onChange: t,
						value: n
					}, r.a.createElement(b.a, {
						className: D.a.layoutOptionWrapper,
						key: y.a.TIMELINE,
						showButton: !0,
						value: y.a.TIMELINE
					}, r.a.createElement("div", {
						className: D.a.optionTextWrapper
					}, r.a.createElement("div", {
						className: D.a.layoutTitle
					}, s.fbt._("Standard", null, {
						hk: "4opAgU"
					})), r.a.createElement("div", {
						className: D.a.layoutSubTitle
					}, s.fbt._("Best for event or discussion collections", null, {
						hk: "3v88sS"
					})))), r.a.createElement(b.a, {
						className: D.a.layoutOptionWrapper,
						key: y.a.GALLERY,
						showButton: !0,
						value: y.a.GALLERY
					}, r.a.createElement("div", {
						className: D.a.optionTextWrapper
					}, r.a.createElement("div", {
						className: D.a.layoutTitle
					}, s.fbt._("Gallery", null, {
						hk: "sR5xJ"
					})), r.a.createElement("div", {
						className: D.a.layoutSubTitle
					}, s.fbt._("Best for image heavy or meme collections", null, {
						hk: "4Btcmq"
					}))))))
				},
				w = e => {
					let {
						onTitleChange: t,
						onDescriptionChange: n,
						onLayoutChange: o,
						title: a,
						description: i,
						displayLayout: c
					} = e;
					return r.a.createElement("div", {
						className: D.a.editCollectionWrapper
					}, r.a.createElement(N, {
						label: s.fbt._("Title", null, {
							hk: "1cdKLH"
						}),
						onChange: t,
						placeholder: s.fbt._("Enter title", null, {
							hk: "bWrfF"
						}),
						maxLength: v.e,
						rows: 1,
						value: a
					}), r.a.createElement(N, {
						label: s.fbt._("Description", null, {
							hk: "iNZtt"
						}),
						onChange: n,
						placeholder: s.fbt._("Give some detail on what the collection is about.", null, {
							hk: "4DPX2P"
						}),
						maxLength: v.b,
						rows: 4,
						value: i
					}), r.a.createElement(P, {
						onLayoutChange: o,
						displayLayout: c
					}))
				},
				k = e => r.a.createElement("button", {
					className: Object(o.a)(e.className, D.a.Tab, {
						[D.a.selected]: e.active
					}),
					onClick: e.onClick
				}, e.children),
				F = Object(c.c)({
					collection: S.q,
					displayLayout: S.b,
					isPending: e => Object(S.g)(e) || Object(S.h)(e) || Object(S.j)(e) || Object(S.l)(e),
					postsByIds: S.o
				}),
				I = Object(i.b)(F, (e, t) => ({
					editCollection: t => e(Object(l.d)(t))
				}));
			class A extends r.a.PureComponent {
				constructor(e) {
					super(e), this.hasUnsavedTitle = () => {
						const e = this.props.collection,
							t = e && e.title || "",
							n = this.state.title;
						return n !== t && "" !== n
					}, this.hasUnsavedDescription = () => {
						const e = this.props.collection,
							t = e && e.description || "";
						return this.state.description !== t
					}, this.hasUnsavedOrder = () => {
						const e = this.props.collection,
							t = e && e.postIds || [],
							n = this.state.reorderedPostIds;
						let s = !1;
						for (let o = 0; o < t.length; o++)
							if (t[o] !== n[o]) {
								s = !0;
								break
							} return s
					}, this.hasUnsavedLayout = () => this.state.displayLayout !== this.props.displayLayout, this.onTitleChange = e => {
						const t = e.target.value;
						this.setState({
							title: t
						})
					}, this.onDescriptionChange = e => {
						const t = e.target.value;
						this.setState({
							description: t
						})
					}, this.onLayoutChange = e => {
						this.setState({
							displayLayout: e
						})
					}, this.handleSave = async () => {
						const {
							collectionId: e,
							editCollection: t,
							onEditSuccess: n
						} = this.props, {
							description: s,
							reorderedPostIds: o,
							title: a,
							displayLayout: r
						} = this.state, i = {
							collectionId: e,
							description: this.hasUnsavedDescription() ? s : void 0,
							postIds: this.hasUnsavedOrder() ? o : void 0,
							title: this.hasUnsavedTitle() ? a : void 0,
							displayLayout: this.hasUnsavedLayout() ? r : void 0
						};
						await t(i) && n && n()
					}, this.handleEscapeKey = e => {
						e.keyCode === x.a.Escape && this.props.onClose()
					}, this.onCollectionTabClick = () => this.setState({
						isPostsSelected: !1
					}), this.onPostsTabClick = () => this.setState({
						isPostsSelected: !0
					}), this.getReactKey = e => e;
					const {
						collection: t
					} = e;
					this.renderPost = this.renderPost.bind(this), this.handleReorder = this.handleReorder.bind(this), this.handleSave = this.handleSave.bind(this), this.state = {
						description: t && t.description || "",
						displayLayout: this.props.displayLayout,
						isPostsSelected: !1,
						reorderedPostIds: t && t.postIds || [],
						title: t && t.title || ""
					}
				}
				handleReorder(e, t, n) {
					this.setState({
						reorderedPostIds: n
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderPost(e, t, n, s, o) {
					const {
						postsByIds: a
					} = this.props;
					if (!a) return;
					const i = a[e];
					return i && r.a.createElement(p.a, {
						className: D.a.dragItem,
						isDragging: n,
						isOver: s,
						canDrop: o
					}, r.a.createElement("div", {
						className: D.a.PostTitle
					}, i.title), r.a.createElement(m.b, {
						post: i
					}))
				}
				render() {
					const {
						isPending: e
					} = this.props, {
						description: t,
						displayLayout: n,
						isPostsSelected: o,
						reorderedPostIds: a,
						title: i
					} = this.state, c = this.hasUnsavedTitle() || this.hasUnsavedDescription() || this.hasUnsavedOrder() || this.hasUnsavedLayout();
					return r.a.createElement("div", {
						className: D.a.Wrapper
					}, r.a.createElement("div", {
						className: D.a.TopRow
					}, r.a.createElement("div", {
						className: D.a.modalTitle
					}, s.fbt._("Edit collection", null, {
						hk: "2uoDhJ"
					}), r.a.createElement("div", {
						className: D.a.closeWrapper,
						onClick: this.props.onClose
					}, r.a.createElement(E.a, {
						className: D.a.Close
					})))), r.a.createElement(L.a, {
						className: D.a.InlineRow
					}, r.a.createElement(k, {
						active: !o,
						onClick: this.onCollectionTabClick
					}, s.fbt._("Collection", null, {
						hk: "BbAzW"
					})), r.a.createElement(k, {
						active: o,
						onClick: this.onPostsTabClick
					}, s.fbt._("Posts", null, {
						hk: "1ojLYW"
					}))), r.a.createElement("div", {
						className: D.a.bodyContainer
					}, o ? r.a.createElement(_.a, {
						getReactKey: this.getReactKey,
						onDrop: this.handleReorder,
						render: this.renderPost,
						values: a
					}) : r.a.createElement(w, {
						onTitleChange: this.onTitleChange,
						onDescriptionChange: this.onDescriptionChange,
						title: i,
						description: t,
						displayLayout: n,
						onLayoutChange: this.onLayoutChange
					})), r.a.createElement("div", {
						className: D.a.FooterWrapper
					}, r.a.createElement(g.t, {
						kind: g.b.Button,
						priority: g.c.Primary,
						onClick: this.handleSave,
						disabled: !c || e
					}, e ? r.a.createElement(C.a, {
						className: D.a.loadingIcon,
						sizePx: j
					}) : s.fbt._("Save", null, {
						hk: "26UTYg"
					}))))
				}
			}
			const U = Object(d.a)(I(A))
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/eventTools/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				c = n("./src/reddit/icons/fonts/Live/index.tsx"),
				d = n("./src/reddit/components/HumanDate/index.tsx"),
				l = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.span("PostEventFutureText", u.a),
				h = m.a.span("PostEventPastText", u.a),
				x = m.a.span("PostEventNowText", u.a),
				v = m.a.span("Container", u.a),
				g = m.a.wrapped(i.a, "CalendarIcon", u.a),
				C = m.a.wrapped(c.a, "LiveIcon", u.a),
				f = m.a.div("LoadingState", u.a);
			class b extends s.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: n
					} = t;
					if (!n) return null;
					const {
						eventEnd: s,
						eventIsLive: i,
						eventStart: c
					} = n, l = Object(a.e)(c, s);
					let u, m;
					if (this.state.mounted || l === a.a.Live) u = o.a.createElement(d.c, {
						startTime: c,
						endTime: s,
						isLive: i
					});
					else {
						const e = Object(r.a)({
							isLoading: !0
						});
						u = o.a.createElement(f, {
							className: e
						})
					}
					if (i) m = o.a.createElement(x, null, o.a.createElement(C, null), u);
					else if (l === a.a.Future) m = o.a.createElement(p, null, o.a.createElement(g, null), u);
					else {
						if (l !== a.a.Past) return null;
						m = o.a.createElement(h, null, o.a.createElement(g, null), u)
					}
					return o.a.createElement(v, {
						className: e
					}, m)
				}
			}
			t.a = b
		},
		"./src/reddit/components/HumanDate/HumanDate.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/humanizeDate/index.ts"),
				r = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...n
				} = e;
				var s;
				const i = Object(r.a)(),
					c = {
						...n,
						locale: null !== (s = n.locale) && void 0 !== s ? s : i
					};
				return o.a.createElement(o.a.Fragment, null, Object(a.a)(t, c))
			}
		},
		"./src/reddit/components/HumanDate/HumanDateTime.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./src/lib/constants/index.ts");
			var i = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					locale: n
				} = e;
				const s = Object(i.a)(),
					c = null != n ? n : s;
				return o.a.createElement(o.a.Fragment, null, function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.DEFAULT_LOCALE;
					const n = e * r.Xb;
					return new Date(n).toLocaleString(t, {
						weekday: "short",
						month: "short",
						year: "numeric",
						day: "2-digit",
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						timeZoneName: "long"
					})
				}(t, c))
			}
		},
		"./src/reddit/components/HumanDate/TimeAgo.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/timeAgo/index.ts"),
				r = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...n
				} = e;
				var s;
				const i = Object(r.a)(),
					c = {
						...n,
						locale: null !== (s = n.locale) && void 0 !== s ? s : i
					};
				return o.a.createElement(o.a.Fragment, null, Object(a.d)(t, c))
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s.a
			})), n.d(t, "a", (function() {
				return o.a
			})), n.d(t, "b", (function() {
				return a.a
			})), n.d(t, "c", (function() {
				return x
			}));
			var s = n("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				o = n("./src/reddit/components/HumanDate/HumanDate.tsx"),
				a = n("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				d = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/eventTools/index.ts");

			function m(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function p(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.DEFAULT_LOCALE;
				const o = Object(u.e)(e, t),
					a = new Date(e * l.Xb);
				let r;
				if (o === u.a.Live || n) return d.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return o === u.a.Future ? r = Object(u.d)(e) ? d.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(u.b)(e) >= 5 ? m(a, s) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(a, s) : o === u.a.Past && (r = Object(u.d)(e) ? d.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : m(a, s)), `${r} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(a,s)}`
			}
			var h = n("./src/reddit/hooks/useLocale.ts");
			var x = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: s,
					locale: o
				} = e;
				const a = Object(h.a)(),
					r = null != o ? o : a;
				return i.a.createElement(i.a.Fragment, null, p(t, n, s, r))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/StructuredStyles/DragItem/index.m.less": function(e, t, n) {
			e.exports = {
				Grapple: "_1RWZwK3K1uM6lSH8uK5DdB",
				grapple: "_1RWZwK3K1uM6lSH8uK5DdB",
				LockIcon: "_1vzrWUGrBGAJS_EeyJ4Ct0",
				lockIcon: "_1vzrWUGrBGAJS_EeyJ4Ct0",
				ExpandLeft: "_10Jk0eCPxa9SanBQsJlfGa",
				expandLeft: "_10Jk0eCPxa9SanBQsJlfGa"
			}
		},
		"./src/reddit/components/StructuredStyles/DragItem/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				i = n("./src/reddit/icons/svgs/Grapple/index.tsx"),
				c = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/DragItem/index.m.less"),
				u = n.n(l);
			const m = a.a.wrapped(i.a, "Grapple", u.a),
				p = a.a.wrapped(c.a, "LockIcon", u.a),
				h = a.a.wrapped(d.a, "ExpandLeft", u.a);
			t.a = e => o.a.createElement(r.a, {
				className: e.className,
				isDragging: e.isDragging,
				isOver: e.isOver,
				canDrop: e.canDrop,
				disabled: e.disabled
			}, o.a.createElement(h, null, e.children, e.disabled ? o.a.createElement(p, {
				className: e.iconClassName
			}) : o.a.createElement(m, {
				className: e.iconClassName
			})))
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return r
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return _
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(o);
			const r = s.a.section("FormPage", a.a),
				i = s.a.h1("HomePageTitle", a.a),
				c = s.a.button("HomePageBreadcrumb", a.a),
				d = s.a.div("HomePageGroup", a.a),
				l = s.a.h1("FormPageTitle", a.a),
				u = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				p = s.a.h2("FormGroupTitle", a.a),
				h = s.a.div("FormElement", a.a),
				x = s.a.div("FormGroupDescription", a.a),
				v = s.a.div("FormItem", a.a),
				g = s.a.h3("FormElementTitle", a.a),
				C = s.a.div("FormElementDescription", a.a),
				f = s.a.div("FormElementError", a.a),
				b = s.a.div("FormElementSubGroup", a.a),
				_ = s.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "g", (function() {
				return f
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				r = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				l = n.n(d);
			const u = s.a.wrapped(o.a, "ModalInput", l.a),
				m = s.a.input("Input", l.a),
				p = s.a.wrapped(c.a, "RadioOn", l.a),
				h = s.a.wrapped(i.a, "RadioOff", l.a),
				x = s.a.wrapped(a.a, "Checkbox", l.a),
				v = s.a.wrapped(r.a, "CheckboxSelected", l.a),
				g = s.a.textarea("Textarea", l.a),
				C = s.a.label("StyledLabel", l.a),
				f = s.a.input("StyledFileInput", l.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less": function(e, t, n) {
			e.exports = {
				FormNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				formNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				disabled: "_2omjYUqCweNidaShU2H5EC",
				DragCard: "ygS6b189jD1GHwzotinJB",
				dragCard: "ygS6b189jD1GHwzotinJB",
				isOverAndCanDrop: "_3_GRCa3UIhqQ68fvB00PLZ",
				isDragging: "_2yg01oNjKP8Gcb4HPjf58k"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				i = n.n(r);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
					let {
						disabled: t,
						...n
					} = e;
					return o.a.createElement("div", c({}, n, {
						className: Object(a.a)(i.a.FormNavElement, {
							[i.a.disabled]: t
						})
					}), n.children)
				},
				l = e => {
					let {
						canDrop: t,
						className: n,
						isDragging: s,
						isOver: r,
						disabled: d,
						...l
					} = e;
					return o.a.createElement("div", c({}, l, {
						className: Object(a.a)(i.a.DragCard, {
							[i.a.disabled]: d,
							[i.a.isDraffing]: s,
							[i.a.isOverAndCanDrop]: r && t
						}, n)
					}))
				}
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			}));
			const s = "PostCreation-AddEventButton",
				o = 500,
				a = "PostCreation-CollectionEducationTooltip",
				r = "PostCreation-EventEducationTooltip",
				i = 300,
				c = i,
				d = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(r);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/helpers/dragDropContext/index.ts"),
				r = n("./node_modules/lodash/flow.js"),
				i = n.n(r),
				c = n("./node_modules/react-dnd/lib/index.js");
			class d extends o.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? i()(e.connectDropTarget, e.connectDragSource)(o.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var l = i()(Object(c.DragSource)("card", {
				beginDrag: e => ({
					id: e.id,
					index: e.index
				}),
				endDrag: (e, t) => {
					if (t && t.didDrop()) {
						const n = t.getDropResult();
						e.onDrop(e.id, n.id)
					}
				}
			}, (e, t) => ({
				connectDragSource: e.dragSource(),
				isDragging: t.isDragging()
			})), Object(c.DropTarget)("card", {
				drop: (e, t) => {
					if (!t || !t.didDrop()) return {
						id: e.id,
						index: e.index
					}
				},
				canDrop: (e, t) => {
					if (!t) return !1;
					const n = t.getItem();
					return e.id !== n.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(d);
			class u extends o.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(n => {
							const s = n.values.slice(),
								o = s.indexOf(e),
								a = s.splice(o, 1)[0];
							let r = s.indexOf(t);
							return o <= r && (r += 1), s.splice(r, 0, a), this.props.onDrop(e, t, s), {
								values: s
							}
						})
					}, this.state = {
						values: e.values
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						values: e.values
					}))
				}
				render() {
					const {
						className: e,
						getReactKey: t,
						onClick: n,
						render: s
					} = this.props;
					return o.a.createElement("div", {
						className: e
					}, this.state.values.map((e, a) => o.a.createElement(l, {
						id: e,
						key: t && t(e, a),
						index: a,
						render: s,
						onDrop: this.onDrop,
						onClick: n
					})))
				}
			}
			t.a = Object(a.a)(u)
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-dnd/lib/index.js"),
				o = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				a = n.n(o);
			t.a = Object(s.DragDropContext)(a.a)
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(a.e)(r.k) || o.DEFAULT_LOCALE;
				return Object(s.isPseudoLocale)(e) ? o.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || o.DEFAULT_LOCALE;
				return Object(s.isPseudoLocale)(e) ? o.DEFAULT_LOCALE : e
			};
			t.a = i;
			const c = () => {
				const e = i(),
					t = Object(a.e)(r.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("live", e.isFilled), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = n.n(r);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return o.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(a.a)(i.a.checkbox, t)
				}, n), o.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, t, n) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Grapple/index.m.less"),
				i = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.grapple, {
					[i.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/editCollectionModal.58fe69b14228f3d42945.js.map