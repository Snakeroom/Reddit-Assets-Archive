// https://www.redditstatic.com/desktop2x/editCollectionModal.21d7bb5bf4388760667b.js
// Retrieved at 3/8/2021, 4:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["editCollectionModal"], {
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(r.b, {
				className: Object(o.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
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
				a = n.n(s),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = n("./src/reddit/helpers/postEvent.ts"),
				d = n("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.wrapped(e => a.a.createElement("span", {
				className: e.className
			}, e.children), "Metadata", l.a), p = ({
				post: e
			}) => Object(c.a)(e) ? a.a.createElement(i.a, {
				className: l.a.postEventMeta,
				post: e
			}) : a.a.createElement(a.a.Fragment, null, !e.isScoreHidden && a.a.createElement(a.a.Fragment, null, a.a.createElement(m, {
				"data-click-id": "score"
			}, u._({
				"*": "{Post score} points",
				_1: "1 point"
			}, [u._plural(e.score, "Post score", Object(o.b)(e.score))], {
				hk: "1gwCFh"
			})), a.a.createElement(m, null, "·")), a.a.createElement(m, {
				"data-click-id": "comments"
			}, u._({
				"*": "{number} comments",
				_1: "1 comment"
			}, [u._plural(e.numComments, "number", Object(o.b)(e.numComments))], {
				hk: "3eG58Q"
			})))
		},
		"./src/reddit/components/EditCollectionModal/index.m.less": function(e, t, n) {
			e.exports = {
				editCollectionWrapper: "_1UZRpW-wwFunqHlHOEMDFF",
				fieldWrapper: "_12Ym_kPTwUFkTpbml49oB2",
				textArea: "_2bBBucE7Lr_QvHeZdVha-C",
				modalTitle: "cz4nQZS4-Ah1NDdX2DwsF",
				closeWrapper: "_3eU1gMlNmVM6fygUFKjuXD",
				bodyContainer: "_15q7Fm7-gLiuxQpuG0mBvp",
				primaryButton: "_1JQwuN4Z0Hw0Kc90fF73R3",
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
				return B
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/postCollection/index.ts"),
				m = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				p = n("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				h = n("./src/reddit/components/StructuredStyles/DragItem/index.tsx"),
				x = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				C = n("./src/reddit/constants/keycodes.ts"),
				v = n("./src/reddit/constants/postCreation.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/index.tsx"),
				_ = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				E = n("./src/reddit/controls/Sortable/index.tsx"),
				y = n("./src/reddit/icons/svgs/Close/index.tsx"),
				S = n("./src/reddit/layout/row/Inline/index.tsx"),
				L = n("./src/reddit/models/PostCollection/index.ts"),
				N = n("./src/reddit/selectors/postCollection.ts"),
				P = n("./src/reddit/components/EditCollectionModal/index.m.less"),
				O = n.n(P);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = 10,
				T = ({
					label: e,
					...t
				}) => i.a.createElement("div", {
					className: O.a.fieldWrapper
				}, i.a.createElement("label", {
					className: O.a.Label
				}, e), i.a.createElement(x.i, D({
					className: O.a.textArea,
					disabled: !1
				}, t)), i.a.createElement(m.a, {
					maxChars: t.maxLength,
					text: t.value
				})),
				j = ({
					onLayoutChange: e,
					displayLayout: t
				}) => i.a.createElement("div", {
					className: O.a.layoutTypeWrapper
				}, i.a.createElement("div", {
					className: O.a.layoutTypeTitle
				}, s.fbt._("Layout type", null, {
					hk: "39DMVQ"
				})), i.a.createElement(b.a, {
					name: "type",
					onChange: e,
					value: t
				}, i.a.createElement(_.a, {
					className: O.a.layoutOptionWrapper,
					key: L.a.TIMELINE,
					showButton: !0,
					value: L.a.TIMELINE
				}, i.a.createElement("div", {
					className: O.a.optionTextWrapper
				}, i.a.createElement("div", {
					className: O.a.layoutTitle
				}, s.fbt._("Standard", null, {
					hk: "4opAgU"
				})), i.a.createElement("div", {
					className: O.a.layoutSubTitle
				}, s.fbt._("Best for event or discussion collections", null, {
					hk: "3v88sS"
				})))), i.a.createElement(_.a, {
					className: O.a.layoutOptionWrapper,
					key: L.a.GALLERY,
					showButton: !0,
					value: L.a.GALLERY
				}, i.a.createElement("div", {
					className: O.a.optionTextWrapper
				}, i.a.createElement("div", {
					className: O.a.layoutTitle
				}, s.fbt._("Gallery", null, {
					hk: "sR5xJ"
				})), i.a.createElement("div", {
					className: O.a.layoutSubTitle
				}, s.fbt._("Best for image heavy or meme collections", null, {
					hk: "4Btcmq"
				})))))),
				k = ({
					onTitleChange: e,
					onDescriptionChange: t,
					onLayoutChange: n,
					title: a,
					description: o,
					displayLayout: r
				}) => i.a.createElement("div", {
					className: O.a.editCollectionWrapper
				}, i.a.createElement(T, {
					label: s.fbt._("Title", null, {
						hk: "1cdKLH"
					}),
					onChange: e,
					placeholder: s.fbt._("Enter title", null, {
						hk: "bWrfF"
					}),
					maxLength: v.e,
					rows: 1,
					value: a
				}), i.a.createElement(T, {
					label: s.fbt._("Description", null, {
						hk: "iNZtt"
					}),
					onChange: t,
					placeholder: s.fbt._("Give some detail on what the collection is about.", null, {
						hk: "4DPX2P"
					}),
					maxLength: v.b,
					rows: 4,
					value: o
				}), i.a.createElement(j, {
					onLayoutChange: n,
					displayLayout: r
				})),
				w = o.a.wrapped(e => i.a.createElement("button", {
					className: Object(a.a)(e.className, {
						[O.a.selected]: e.active
					}),
					onClick: e.onClick
				}, e.children), "Tab", O.a),
				F = Object(d.c)({
					collection: N.q,
					displayLayout: N.b,
					isPending: e => Object(N.g)(e) || Object(N.h)(e) || Object(N.j)(e) || Object(N.l)(e),
					postsByIds: N.o
				}),
				M = Object(c.b)(F, (e, t) => ({
					editCollection: t => e(Object(u.d)(t))
				}));
			class R extends i.a.PureComponent {
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
						for (let a = 0; a < t.length; a++)
							if (t[a] !== n[a]) {
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
							reorderedPostIds: a,
							title: o,
							displayLayout: r
						} = this.state, i = {
							collectionId: e,
							description: this.hasUnsavedDescription() ? s : void 0,
							postIds: this.hasUnsavedOrder() ? a : void 0,
							title: this.hasUnsavedTitle() ? o : void 0,
							displayLayout: this.hasUnsavedLayout() ? r : void 0
						};
						await t(i) && n && n()
					}, this.handleEscapeKey = e => {
						e.keyCode === C.a.Escape && this.props.onClose()
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
				renderPost(e, t, n, s, a) {
					const {
						postsByIds: o
					} = this.props;
					if (!o) return;
					const r = o[e];
					return r && i.a.createElement(h.a, {
						className: O.a.dragItem,
						isDragging: n,
						isOver: s,
						canDrop: a
					}, i.a.createElement("div", {
						className: O.a.PostTitle
					}, r.title), i.a.createElement(p.b, {
						post: r
					}))
				}
				render() {
					const {
						isPending: e
					} = this.props, {
						description: t,
						displayLayout: n,
						isPostsSelected: a,
						reorderedPostIds: o,
						title: r
					} = this.state, c = this.hasUnsavedTitle() || this.hasUnsavedDescription() || this.hasUnsavedOrder() || this.hasUnsavedLayout();
					return i.a.createElement("div", {
						className: O.a.Wrapper
					}, i.a.createElement("div", {
						className: O.a.TopRow
					}, i.a.createElement("div", {
						className: O.a.modalTitle
					}, s.fbt._("Edit collection", null, {
						hk: "2uoDhJ"
					}), i.a.createElement("div", {
						className: O.a.closeWrapper,
						onClick: this.props.onClose
					}, i.a.createElement(y.a, {
						className: O.a.Close
					})))), i.a.createElement(S.a, {
						className: O.a.InlineRow
					}, i.a.createElement(w, {
						active: !a,
						onClick: this.onCollectionTabClick
					}, s.fbt._("Collection", null, {
						hk: "BbAzW"
					})), i.a.createElement(w, {
						active: a,
						onClick: this.onPostsTabClick
					}, s.fbt._("Posts", null, {
						hk: "1ojLYW"
					}))), i.a.createElement("div", {
						className: O.a.bodyContainer
					}, a ? i.a.createElement(E.a, {
						getReactKey: this.getReactKey,
						onDrop: this.handleReorder,
						render: this.renderPost,
						values: o
					}) : i.a.createElement(k, {
						onTitleChange: this.onTitleChange,
						onDescriptionChange: this.onDescriptionChange,
						title: r,
						description: t,
						displayLayout: n,
						onLayoutChange: this.onLayoutChange
					})), i.a.createElement("div", {
						className: O.a.FooterWrapper
					}, i.a.createElement(g.i, {
						className: O.a.primaryButton,
						onClick: this.handleSave,
						disabled: !c || e
					}, e ? i.a.createElement(f.a, {
						className: O.a.loadingIcon,
						sizePx: I
					}) : s.fbt._("Save", null, {
						hk: "26UTYg"
					}))))
				}
			}
			const B = Object(l.a)(M(R))
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
				a = n.n(s),
				o = n("./src/lib/eventTools/index.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/constants/index.ts");

			function c(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				u = n("./src/reddit/icons/fonts/Live/index.tsx"),
				m = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				p = n.n(m),
				h = n("./src/lib/lessComponent.tsx");
			const x = h.a.span("PostEventFutureText", p.a),
				C = h.a.span("PostEventPastText", p.a),
				v = h.a.span("PostEventNowText", p.a),
				g = h.a.span("Container", p.a),
				f = h.a.wrapped(l.a, "CalendarIcon", p.a),
				b = h.a.wrapped(u.a, "LiveIcon", p.a),
				_ = h.a.div("LoadingState", p.a);
			class E extends s.Component {
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
						eventIsLive: l,
						eventStart: u
					} = n, m = Object(o.e)(u, s);
					let p, h;
					if (this.state.mounted || m === o.a.Live) p = function(e, t, n) {
						const s = Object(o.e)(e, t),
							a = new Date(e * i.Hb);
						let d;
						return s === o.a.Live || n ? r.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (s === o.a.Future ? d = Object(o.d)(e) ? r.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(o.b)(e) >= 5 ? c(a) : a.toLocaleDateString(void 0, {
							weekday: "long"
						}) : s === o.a.Past && (d = Object(o.d)(e) ? r.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(a)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(a)}`)
					}(u, s, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						p = a.a.createElement(_, {
							className: e
						})
					}
					if (l) h = a.a.createElement(v, null, a.a.createElement(b, null), p);
					else if (m === o.a.Future) h = a.a.createElement(x, null, a.a.createElement(f, null), p);
					else {
						if (m !== o.a.Past) return null;
						h = a.a.createElement(C, null, a.a.createElement(f, null), p)
					}
					return a.a.createElement(g, {
						className: e
					}, h)
				}
			}
			t.a = E
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
				a = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				i = n("./src/reddit/icons/svgs/Grapple/index.tsx"),
				c = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/DragItem/index.m.less"),
				u = n.n(l);
			const m = o.a.wrapped(i.a, "Grapple", u.a),
				p = o.a.wrapped(c.a, "LockIcon", u.a),
				h = o.a.wrapped(d.a, "ExpandLeft", u.a);
			t.a = e => a.a.createElement(r.a, {
				className: e.className,
				isDragging: e.isDragging,
				isOver: e.isOver,
				canDrop: e.canDrop,
				disabled: e.disabled
			}, a.a.createElement(h, null, e.children, e.disabled ? a.a.createElement(p, {
				className: e.iconClassName
			}) : a.a.createElement(m, {
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
				return C
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return _
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(a);
			const r = s.a.section("FormPage", o.a),
				i = s.a.h1("HomePageTitle", o.a),
				c = s.a.button("HomePageBreadcrumb", o.a),
				d = s.a.div("HomePageGroup", o.a),
				l = s.a.h1("FormPageTitle", o.a),
				u = s.a.div("FormPageSection", o.a),
				m = s.a.div("FormGroup", o.a),
				p = s.a.h2("FormGroupTitle", o.a),
				h = s.a.div("FormElement", o.a),
				x = s.a.div("FormGroupDescription", o.a),
				C = s.a.div("FormItem", o.a),
				v = s.a.h3("FormElementTitle", o.a),
				g = s.a.div("FormElementDescription", o.a),
				f = s.a.div("FormElementError", o.a),
				b = s.a.div("FormElementSubGroup", o.a),
				_ = s.a.li("FormListItem", o.a)
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
				return C
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "g", (function() {
				return f
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/ModalInput.tsx"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				r = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				l = n.n(d);
			const u = s.a.wrapped(a.a, "ModalInput", l.a),
				m = s.a.input("Input", l.a),
				p = s.a.wrapped(c.a, "RadioOn", l.a),
				h = s.a.wrapped(i.a, "RadioOff", l.a),
				x = s.a.wrapped(o.a, "Checkbox", l.a),
				C = s.a.wrapped(r.a, "CheckboxSelected", l.a),
				v = s.a.textarea("Textarea", l.a),
				g = s.a.label("StyledLabel", l.a),
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
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
			const d = ({
					disabled: e,
					...t
				}) => a.a.createElement("div", c({}, t, {
					className: Object(o.a)(i.a.FormNavElement, {
						[i.a.disabled]: e
					})
				}), t.children),
				l = ({
					canDrop: e,
					className: t,
					isDragging: n,
					isOver: s,
					disabled: r,
					...d
				}) => a.a.createElement("div", c({}, d, {
					className: Object(o.a)(i.a.DragCard, {
						[i.a.disabled]: r,
						[i.a.isDraffing]: n,
						[i.a.isOverAndCanDrop]: s && e
					}, t)
				}))
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
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
				a = 500,
				o = "PostCreation-CollectionEducationTooltip",
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
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(r);
			t.a = ({
				center: e,
				className: t,
				sizePx: n
			}) => a.a.createElement("div", {
				className: Object(o.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/helpers/dragDropContext/index.ts"),
				r = n("./node_modules/lodash/flow.js"),
				i = n.n(r),
				c = n("./node_modules/react-dnd/lib/index.js");
			class d extends a.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? i()(e.connectDropTarget, e.connectDragSource)(a.a.createElement("div", {
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
			class u extends a.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(n => {
							const s = n.values.slice(),
								a = s.indexOf(e),
								o = s.splice(a, 1)[0];
							let r = s.indexOf(t);
							return a <= r && (r += 1), s.splice(r, 0, o), this.props.onDrop(e, t, s), {
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
					return a.a.createElement("div", {
						className: e
					}, this.state.values.map((e, o) => a.a.createElement(l, {
						id: e,
						key: t && t(e, o),
						index: o,
						render: s,
						onDrop: this.onDrop,
						onClick: n
					})))
				}
			}
			t.a = Object(o.a)(u)
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-dnd/lib/index.js"),
				a = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				o = n.n(a);
			t.a = Object(s.DragDropContext)(o.a)
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(c);
			t.a = e => {
				const t = Object(r.a)();
				return a.a.createElement("i", {
					className: Object(o.a)(Object(i.b)(t ? "scheduled" : "calendar", e.isFilled), d.a.calendarIcon, e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => a.a.createElement("i", {
				className: Object(o.a)(Object(r.b)("live", e.isFilled), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
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
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Grapple/index.m.less"),
				i = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.grapple, {
					[i.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/editCollectionModal.21d7bb5bf4388760667b.js.map